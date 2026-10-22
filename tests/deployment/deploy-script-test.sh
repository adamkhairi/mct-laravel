#!/usr/bin/env bash

set -Eeuo pipefail

project_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
test_root=$(mktemp -d)
trap 'rm -rf "$test_root"' EXIT

app_root="$test_root/app"
mock_bin="$test_root/bin"
mkdir -p "$app_root/releases/legacy" "$app_root/shared/storage" "$mock_bin"
printf 'APP_ENV=production\nAPP_DEBUG=false\n' > "$app_root/shared/.env"
printf 'legacy\n' > "$app_root/releases/legacy/artisan"
ln -s releases/legacy "$app_root/current"
real_php=$(command -v php)

cat > "$mock_bin/php" <<'PHP'
#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${1:-} == -r ]]; then
    exec "$REAL_PHP" "$@"
fi
command_name=${2:-}
case "$command_name" in
    optimize)
        exit 0
        ;;
    config:show)
        case ${3:-} in
            app.env)
                value=production
                ;;
            app.debug)
                value=false
                ;;
            inertia.ssr.enabled)
                value=${FAKE_SSR_ENABLED:-true}
                ;;
            *)
                exit 2
                ;;
        esac
        printf '%s .. %s\n' "${3:-}" "$value"
        ;;
    inertia:check-ssr)
        [[ -f $SSR_STATE ]]
        ;;
    inertia:start-ssr)
        touch "$SSR_STATE"
        ;;
    inertia:stop-ssr)
        rm -f "$SSR_STATE"
        ;;
    *)
        echo "Unexpected artisan command in deploy fixture: $command_name" >&2
        exit 2
        ;;
esac
PHP

cat > "$mock_bin/curl" <<'CURL'
#!/usr/bin/env bash
if [[ ${FAIL_HEALTH_CHECK:-0} == 1 ]]; then
    exit 22
fi
exit 0
CURL
chmod +x "$mock_bin/php" "$mock_bin/curl"

create_artifact() {
    local commit_sha=$1
    local archive_path=$2
    local package_path="$test_root/package-$commit_sha"
    mkdir -p "$package_path/vendor" "$package_path/public/build/assets"
    printf '%s\n' "$commit_sha" > "$package_path/.release-sha"
    printf '<?php\n' > "$package_path/artisan"
    printf '<?php\n' > "$package_path/vendor/autoload.php"
    printf 'bundle\n' > "$package_path/public/build/assets/app.js"
    printf 'styles\n' > "$package_path/public/build/assets/app.css"
    printf '{"resources/js/app.tsx":{"file":"assets/app.js","css":[],"assets":[]},"resources/css/app.css":{"file":"assets/app.css"}}\n' > "$package_path/public/build/manifest.json"
    tar -czf "$archive_path" -C "$package_path" .
}

run_deploy() {
    local archive_path=$1
    local commit_sha=$2
    local ssr_enabled=${3:-true}
    PATH="$mock_bin:$PATH" \
    REAL_PHP="$real_php" \
    APP_ROOT="$app_root" \
    APP_URL='https://example.test' \
    PHP_BIN="$mock_bin/php" \
    SSR_STATE="$test_root/ssr-state" \
    FAKE_SSR_ENABLED="$ssr_enabled" \
    bash "$project_root/deploy.sh" "$archive_path" "$commit_sha"
}

first_sha=1111111111111111111111111111111111111111
first_archive="$test_root/$first_sha.tar.gz"
create_artifact "$first_sha" "$first_archive"
run_deploy "$first_archive" "$first_sha"
[[ $(readlink "$app_root/current") == "releases/$first_sha" ]]
[[ -L "$app_root/releases/$first_sha/.env" ]]
[[ -L "$app_root/releases/$first_sha/storage" ]]
[[ -f "$test_root/ssr-state" ]]
[[ ! -e "$app_root/.deploy-lock" ]]

second_sha=2222222222222222222222222222222222222222
second_archive="$test_root/$second_sha.tar.gz"
create_artifact "$second_sha" "$second_archive"
if PATH="$mock_bin:$PATH" REAL_PHP="$real_php" APP_ROOT="$app_root" APP_URL='https://example.test' PHP_BIN="$mock_bin/php" SSR_STATE="$test_root/ssr-state" FAKE_SSR_ENABLED=true FAIL_HEALTH_CHECK=1 bash "$project_root/deploy.sh" "$second_archive" "$second_sha"; then
    echo 'Expected the health-check failure to reject the second release.' >&2
    exit 1
fi
[[ $(readlink "$app_root/current") == "releases/$first_sha" ]]
[[ ! -e "$app_root/releases/$second_sha" ]]
[[ -f "$test_root/ssr-state" ]]
[[ ! -e "$app_root/.deploy-lock" ]]

third_sha=3333333333333333333333333333333333333333
third_archive="$test_root/$third_sha.tar.gz"
create_artifact "$third_sha" "$third_archive"
run_deploy "$third_archive" "$third_sha" false
[[ $(readlink "$app_root/current") == "releases/$third_sha" ]]
[[ ! -e "$test_root/ssr-state" ]]
[[ ! -e "$app_root/.deploy-lock" ]]

bad_sha=4444444444444444444444444444444444444444
bad_archive="$test_root/$bad_sha.tar.gz"
create_artifact "$first_sha" "$bad_archive"
if run_deploy "$bad_archive" "$bad_sha"; then
    echo 'Expected a mismatched artifact SHA to be rejected.' >&2
    exit 1
fi
[[ $(readlink "$app_root/current") == "releases/$third_sha" ]]
[[ ! -e "$app_root/releases/$bad_sha" ]]
[[ ! -e "$app_root/.deploy-lock" ]]

if grep -Eq 'artisan[[:space:]]+(migrate|db:seed|db:seed:|.*import)' "$project_root/deploy.sh"; then
    echo 'Deployment script unexpectedly runs a data command.' >&2
    exit 1
fi

echo 'Deployment script success, health-check rollback, and artifact validation passed.'
