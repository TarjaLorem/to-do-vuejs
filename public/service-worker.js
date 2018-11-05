const CACHE_NAME = "pwa-todo-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./img/icons"
];

self.addEventListener('install', event => {
  console.log('Installing sw.')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});