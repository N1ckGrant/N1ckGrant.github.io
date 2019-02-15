// sw.js
self.addEventListener('install', e => {
    e.waitUntil(
        // после установки service worker
        // открыть новый кэш
        caches.open('my-pwa-cache').then(cache => {
            // добавляем все URL ресурсов, которые хотим закэшировать
            return cache.addAll([
                '/',
                '/index.html',
                '/IGT_crypto.html',
                '/project.html',
                '/vacancy.html',
                '/about.html',
                '/img/introBG.gif',
                '/css/main.css',
                '/css/vendor.min.css',
                '/js/main.js',
                '/js/index.js',
            ]);
        })
    );
});