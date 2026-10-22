<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="/favicon.ico?v=20261022" sizes="any">
        <link rel="icon" href="/favicon.png?v=20261022" sizes="192x192" type="image/png">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=20261022" sizes="180x180">
        <link rel="manifest" href="/manifest.webmanifest?v=20261022">
        <meta name="theme-color" content="#cb5f35">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
