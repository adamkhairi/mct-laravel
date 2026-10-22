#!/usr/bin/env bash

set -Eeuo pipefail
umask 077

usage() {
    cat >&2 <<'USAGE'
Usage: deploy.sh <release-archive> <40-character-commit-sha>

Required environment:
  APP_ROOT  Absolute deployment root containing shared/ and releases/.
  APP_URL   Canonical HTTPS URL used for post-deploy health checks.

Optional environment:
  PHP_BIN   PHP executable (defaults to Hostinger PHP 8.5).
USAGE
}

if [[ $# -ne 2 ]]; then
    usage
    exit 2
fi

archive_path=$1
commit_sha=${2,,}
app_root=${APP_ROOT:-}
app_url=${APP_URL:-}
php_bin=${PHP_BIN:-/opt/alt/php85/usr/bin/php}

if [[ ! $commit_sha =~ ^[0-9a-f]{40}$ ]]; then
    echo 'Commit SHA must contain exactly 40 hexadecimal characters.' >&2
    exit 2
fi
if [[ -z $app_root || $app_root != /* || $app_root == / || $app_url != https://* ]]; then
    echo 'APP_ROOT must be an absolute deployment path and APP_URL must be set.' >&2
    exit 2
fi
if [[ ! -f $archive_path || ! -r $archive_path ]]; then
    echo "Release archive is missing or unreadable: $archive_path" >&2
    exit 2
fi

for command_name in awk curl find grep ln mkdir mv nohup readlink rm rmdir seq sleep sort tail tar; do
    if ! command -v "$command_name" >/dev/null 2>&1; then
        echo "Required command is unavailable: $command_name" >&2
        exit 2
    fi
done
if [[ ! -x $php_bin ]]; then
    if command -v php >/dev/null 2>&1; then
        php_bin=$(command -v php)
    else
        echo "PHP executable is unavailable: $php_bin" >&2
        exit 2
    fi
fi

shared_path="$app_root/shared"
releases_path="$app_root/releases"
release_path="$releases_path/$commit_sha"
current_link="$app_root/current"
lock_path="$app_root/.deploy-lock"
next_link="$app_root/.current.$commit_sha.$$"
ssr_log="$shared_path/storage/logs/ssr.log"

if [[ ! -d $shared_path || ! -f $shared_path/.env || ! -d $shared_path/storage ]]; then
    echo 'Deployment is not initialized: shared/.env and shared/storage must exist.' >&2
    exit 2
fi
if [[ ! -d $releases_path || ! -w $shared_path/storage || ! -w $releases_path ]]; then
    echo 'The releases directory and shared storage must exist and be writable.' >&2
    exit 2
fi
if ! mkdir "$lock_path" 2>/dev/null; then
    echo "Another deployment is running or a stale lock exists: $lock_path" >&2
    exit 2
fi

previous_target=''
previous_path=''
previous_ssr_was_running=0
candidate_ssr_started=0
current_switched=0

if [[ -L $current_link ]]; then
    previous_target=$(readlink "$current_link")
    if [[ $previous_target == /* ]]; then
        previous_path=$previous_target
    else
        previous_path="$app_root/$previous_target"
    fi
    if [[ ! -d $previous_path || ! -f $previous_path/artisan ]]; then
        rmdir "$lock_path"
        echo "Current release symlink is invalid: $current_link -> $previous_target" >&2
        exit 2
    fi
elif [[ -e $current_link ]]; then
    rmdir "$lock_path"
    echo "Current release path exists but is not a symlink: $current_link" >&2
    exit 2
fi

stop_ssr() {
    local target_path=$1
    if "$php_bin" "$target_path/artisan" inertia:check-ssr --no-interaction >/dev/null 2>&1; then
        "$php_bin" "$target_path/artisan" inertia:stop-ssr --no-interaction || return $?
        return 0
    fi
    return 1
}

start_ssr() {
    local target_path=$1
    (
        cd "$target_path"
        nohup "$php_bin" artisan inertia:start-ssr --no-interaction >>"$ssr_log" 2>&1 </dev/null &
    )
}

restore_previous_release() {
    if [[ -n $previous_target ]]; then
        local rollback_link="$app_root/.current.rollback.$$"
        ln -s "$previous_target" "$rollback_link"
        mv -Tf "$rollback_link" "$current_link"
    else
        rm -f "$current_link"
    fi
    current_switched=0

    if (( previous_ssr_was_running == 1 )); then
        start_ssr "$previous_path"
    fi
}

on_exit() {
    local exit_status=$?
    trap - EXIT

    if (( exit_status != 0 && current_switched == 1 )); then
        echo 'Deployment failed after switching releases; restoring the previous release.' >&2
        if (( candidate_ssr_started == 1 )); then
            stop_ssr "$release_path" >/dev/null 2>&1 || true
        fi
        restore_previous_release || echo 'Automatic rollback was incomplete; inspect the current symlink and SSR process.' >&2
    fi

    if (( exit_status != 0 )) && [[ -d $release_path ]]; then
        if [[ ! -L $current_link || $(readlink "$current_link") != "releases/$commit_sha" ]]; then
            rm -rf -- "$release_path"
        fi
    fi

    rm -f "$next_link"
    rmdir "$lock_path" 2>/dev/null || true
    exit "$exit_status"
}
trap on_exit EXIT

if [[ -e $release_path || -L $release_path ]]; then
    echo "Release already exists: $release_path" >&2
    exit 2
fi
mkdir -p "$shared_path/storage/logs"
if tar -tzf "$archive_path" | grep -E '(^/|(^|/)\.\.(/|$))' >/dev/null; then
    echo 'Release archive contains an unsafe path.' >&2
    exit 2
fi

mkdir "$release_path"
tar -xzf "$archive_path" -C "$release_path"
if [[ ! -f $release_path/.release-sha || $(<"$release_path/.release-sha") != "$commit_sha" ]]; then
    echo 'Release archive commit marker does not match the requested SHA.' >&2
    exit 2
fi
for required_file in artisan vendor/autoload.php public/build/manifest.json; do
    if [[ ! -f $release_path/$required_file ]]; then
        echo "Release archive is missing required file: $required_file" >&2
        exit 2
    fi
done

ln -s "$shared_path/.env" "$release_path/.env"
ln -s "$shared_path/storage" "$release_path/storage"
if [[ -L $release_path/public/storage ]]; then
    storage_target=$(readlink "$release_path/public/storage")
    if [[ $storage_target != '../storage/app/public' ]]; then
        echo "Unexpected public/storage symlink in release: $storage_target" >&2
        exit 2
    fi
elif [[ -e $release_path/public/storage ]]; then
    echo 'Release public/storage exists but is not the expected symlink.' >&2
    exit 2
else
    ln -s ../storage/app/public "$release_path/public/storage"
fi

manifest="$release_path/public/build/manifest.json"
if ! "$php_bin" -r '
$manifest = json_decode(file_get_contents($argv[1]), true, flags: JSON_THROW_ON_ERROR);
foreach ($manifest as $entry) {
    foreach (array_merge([$entry["file"] ?? null], $entry["css"] ?? [], $entry["assets"] ?? []) as $file) {
        if ($file !== null && ! is_file(dirname($argv[1])."/".$file)) {
            fwrite(STDERR, "Missing Vite asset: {$file}\n");
            exit(1);
        }
    }
}
' "$manifest"; then
    echo 'Vite manifest references missing build files.' >&2
    exit 2
fi

(
    cd "$release_path"
    "$php_bin" artisan optimize --no-interaction
)
read_config_value() {
    "$php_bin" "$release_path/artisan" config:show "$1" --no-interaction --no-ansi | awk 'NF { value = $NF } END { print value }'
}

if [[ $(read_config_value app.env) != production || $(read_config_value app.debug) != false ]]; then
    echo 'Production APP_ENV must be production and APP_DEBUG must be false.' >&2
    exit 2
fi
ssr_setting=$(read_config_value inertia.ssr.enabled)
case "$ssr_setting" in
    true|1) ssr_enabled=1 ;;
    false|0) ssr_enabled=0 ;;
    *)
        echo "Could not determine the Inertia SSR setting: $ssr_setting" >&2
        exit 2
        ;;
esac

if [[ -n $previous_path ]] && stop_ssr "$previous_path"; then
    previous_ssr_was_running=1
fi

ln -s "releases/$commit_sha" "$next_link"
mv -Tf "$next_link" "$current_link"
current_switched=1

if (( ssr_enabled == 1 )); then
    start_ssr "$release_path"
    candidate_ssr_started=1
    ssr_ready=0
    for attempt in $(seq 1 30); do
        if "$php_bin" "$release_path/artisan" inertia:check-ssr --no-interaction >/dev/null 2>&1; then
            ssr_ready=1
            break
        fi
        sleep 1
    done
    if (( ssr_ready == 0 )); then
        echo 'Inertia SSR did not become healthy within 30 seconds.' >&2
        tail -n 80 "$ssr_log" >&2 || true
        exit 1
    fi
fi

if ! curl --fail --silent --show-error --max-time 20 "$app_url/up" >/dev/null; then
    echo "Application health check failed: $app_url/up" >&2
    exit 1
fi
if ! curl --fail --silent --show-error --location --max-redirs 3 --max-time 30 "$app_url/" >/dev/null; then
    echo "Homepage health check failed: $app_url/" >&2
    exit 1
fi
primary_assets=$("$php_bin" -r '
$manifest = json_decode(file_get_contents($argv[1]), true, flags: JSON_THROW_ON_ERROR);
foreach (["resources/js/app.tsx", "resources/css/app.css"] as $entry) {
    if (! isset($manifest[$entry]["file"])) {
        fwrite(STDERR, "Missing Vite entry: {$entry}\n");
        exit(1);
    }
    echo $manifest[$entry]["file"]."\n";
}
' "$manifest")
while IFS= read -r asset_path; do
    if [[ ! $asset_path =~ ^assets/[A-Za-z0-9_.-]+$ ]] || ! curl --fail --silent --show-error --max-time 20 "$app_url/build/$asset_path" >/dev/null; then
        echo "Primary frontend asset health check failed: $asset_path" >&2
        exit 1
    fi
done <<< "$primary_assets"

current_switched=0
echo "Deployed $commit_sha successfully."

mapfile -t old_releases < <(find "$releases_path" -mindepth 1 -maxdepth 1 -type d ! -name "$commit_sha" ! -name legacy -printf '%T@ %p\n' | sort -nr | awk 'NR > 4 { $1 = ""; sub(/^ /, ""); print }')
for old_release in "${old_releases[@]}"; do
    if [[ -n $old_release && $old_release != "$previous_path" && $old_release == "$releases_path/"* ]]; then
        rm -rf -- "$old_release" || echo "Could not prune old release: $old_release" >&2
    fi
done
