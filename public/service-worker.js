const CACHE_NAME = 'my-nextjs-pwa-cache';
const urlsToCache = [
  '/',
  '/index.js',
  // Add other static assets to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).catch(() => {
          // Return a custom offline page when the user is offline
          return caches.match('/offline.html');
        });
      })
    );
  });