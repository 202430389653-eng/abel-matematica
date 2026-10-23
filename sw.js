
const CACHE_PREFIX = `abel-matematica:${self.registration.scope}:`;
const CACHE_NAME = `${CACHE_PREFIX}v4`;

const ARQUIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./imagens/logo-escola.jpg",
  "./imagens/icone-app-192.png",
  "./imagens/icone-app-512.png"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARQUIVOS))
  );

  self.skipWaiting();
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys().then(chaves =>
      Promise.all(
        chaves
          .filter(chave => chave.startsWith(CACHE_PREFIX) && chave !== CACHE_NAME)
          .map(chave => caches.delete(chave))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", evento => {
  if (evento.request.method !== "GET") return;

  evento.respondWith(
    caches.open(CACHE_NAME).then(cache => cache.match(evento.request)).then(resposta => {
      if (resposta) return resposta;

      return fetch(evento.request);
    })
  );
});
