const CACHE_NAME = 'reachability-check-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './assets/css/styles.css',
  './assets/js/script.js',
  './assets/js/i18n.js',
  'https://unpkg.com/i18next@latest/dist/umd/i18next.min.js',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Don't cache external API calls or test URLs
  if (event.request.url.startsWith('http')) {
      // Only cache assets from our domain or specific external assets like fonts/cdn
      const isInternal = event.request.url.includes(self.location.origin);
      const isCDN = event.request.url.includes('unpkg.com') || event.request.url.includes('fonts.googleapis.com') || event.request.url.includes('fonts.gstatic.com');

      if (!isInternal && !isCDN) {
          return;
      }
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
