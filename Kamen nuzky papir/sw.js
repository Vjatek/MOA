//pro práci offline a ukládání do cache

const CACHE_NAME = "v2";
const cacheAssets = [
  "./",
  "./index.html",
  "./index.js",
  "./style.css",
  "./manifest.json",
  "./bg.jpg",
  "./icon192.png",
  "./icon512.png"
];

// Instalace: uložení souborů do cache
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Caching files");
        return cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Aktivace: smazání starých cache
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Removing old cache", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: vrací soubory z cache, když není internet
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request);
    })
  );
});