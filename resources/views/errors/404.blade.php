<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex,follow">
        <meta name="theme-color" content="#cb5f35">
        <title>Page not found | Moroccan Club Travel</title>
        @vite(['resources/css/app.css'])
    </head>
    <body class="min-h-screen bg-sand text-indigo-ink">
        <main class="flex min-h-screen items-center justify-center px-6 py-24 text-center">
            <div class="max-w-xl">
                <p class="mb-6 font-mono text-xs tracking-[0.3em] text-terracotta">404</p>
                <h1 class="font-display text-5xl leading-tight font-bold md:text-7xl">This page could not be found.</h1>
                <p class="mt-6 text-lg text-foreground/60">Try the homepage or browse our Morocco tours.</p>
                <div class="mt-10 flex flex-wrap justify-center gap-4">
                    <a href="/en" class="bg-terracotta px-6 py-4 text-xs font-semibold tracking-[0.2em] text-ivory uppercase">Home</a>
                    <a href="/en/tours" class="border border-foreground/20 px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:border-terracotta hover:text-terracotta">Browse tours</a>
                </div>
            </div>
        </main>
    </body>
</html>
