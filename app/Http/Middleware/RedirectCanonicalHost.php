<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectCanonicalHost
{
    public function handle(Request $request, Closure $next): Response
    {
        $canonicalUrl = rtrim((string) config('seo.canonical_url'), '/');
        $canonicalHost = parse_url($canonicalUrl, PHP_URL_HOST);
        $requestHost = $request->getHost();
        $alternateHost = is_string($canonicalHost)
            ? (str_starts_with(strtolower($canonicalHost), 'www.')
                ? substr($canonicalHost, 4)
                : 'www.'.$canonicalHost)
            : null;

        if (is_string($canonicalHost) && is_string($alternateHost)
            && strcasecmp($requestHost, $alternateHost) === 0) {
            return redirect()->away($canonicalUrl.$request->getRequestUri(), 301);
        }

        return $next($request);
    }
}
