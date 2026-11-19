//pro práci offline a ukládání do cache
  
const CACHE_NAME = "v1";
const cacheAssets = [
  "/",
  "/icon192.png",
  "/icon512.png",
  "/index.html",
  "/index.js",
  "/manifest.json",
  "/style.css"
  
  
  
];
  
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
    })
  );
});