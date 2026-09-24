/* Team-Begleiter Rettungshund – Service Worker: startet die App auch ohne Internet.
   Die Daten liegen im lokalen Gerätespeicher, nicht in diesem Cache.
   Bei jeder neuen Version CACHE_VERSION erhöhen. */
const CACHE_VERSION = 'teambegleiter-2.22.0';
const DATEIEN = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_VERSION).then(c=>
    // Einzeln laden: eine fehlende Datei darf die Installation nicht komplett verhindern.
    Promise.allSettled(DATEIEN.map(u=>c.add(u).catch(()=>{})))
  ).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE_VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET' || new URL(e.request.url).origin!==location.origin) return;
  // App-Dateien: Netz zuerst (Aktualisierungen kommen an), sonst Cache
  e.respondWith(fetch(e.request).then(r=>{ const k=r.clone(); caches.open(CACHE_VERSION).then(c=>c.put(e.request,k)); return r; })
    .catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
