const CACHE_NAME = "pwa-todo-v1";
const filesToCache = [
  "./",
  "./index.html",
  "https://cdn.jsdelivr.net/npm/vue",
  "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
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