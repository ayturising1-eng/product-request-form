const CACHE = 'product-request-form-c71-janela-motor-direction';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './assets.js',
  './assets-1.js',
  './assets-2.js',
  './assets-3.js',
  './assets-4.js',
  './color-catalogs.js',
  './pergo-rise-fabrics.js',
  './products.js',
  './manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
