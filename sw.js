/* BARRY · TEST – Service Worker (Offline-Cache)
   Speichert nur App-Dateien (HTML, Manifest, Icons). Nutzerdaten liegen im
   Browserspeicher (localStorage/IndexedDB) und werden hier NIE angefasst.
   Alle Apps unter mwhog-hue.github.io teilen sich den Cache-Speicher: deshalb
   werden ausschließlich Caches mit dem eigenen Präfix aufgeräumt. */
const CACHE_PREFIX = 'Barry-';
const CACHE_VERSION = CACHE_PREFIX + '2.54';   // bei jeder Veröffentlichung hochzählen
const APP_DATEIEN = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico',
  './rhs-apple-touch-icon.png',
  './rhs-favicon-32.png',
  './rhs-icon-192.png',
  './rhs-icon-512.png',
  './rhs-maskable-192.png',
  './rhs-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_DATEIEN.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen
        .filter(n => n.startsWith(CACHE_PREFIX) && n !== CACHE_VERSION)
        .map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !req.url.startsWith(self.registration.scope)) return;

  // Seite selbst: zuerst Netz (damit neue Versionen ankommen), offline aus dem Cache.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(antwort => {
        if (antwort.ok) { const kopie = antwort.clone(); caches.open(CACHE_VERSION).then(c => c.put('./index.html', kopie)); }
        return antwort;
      }).catch(() => caches.match('./index.html', { ignoreSearch: true }).then(r => r || caches.match('./')))
    );
    return;
  }

  // Icons, Manifest usw.: zuerst Cache, sonst Netz (und dann nachlegen).
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(treffer => treffer || fetch(req).then(antwort => {
      if (antwort.ok && antwort.type === 'basic') { const kopie = antwort.clone(); caches.open(CACHE_VERSION).then(c => c.put(req, kopie)); }
      return antwort;
    }))
  );
});
