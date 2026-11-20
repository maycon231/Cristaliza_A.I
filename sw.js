/*
 * Service worker do Painel de Cristalização
 * Copyright © 2026 Maycon Willian de Lima Santos. Todos os direitos reservados.
 *
 * Estratégia "rede primeiro": tenta sempre a versão mais nova na internet e
 * guarda uma cópia. Se não houver conexão, usa a cópia guardada.
 * Ao publicar uma alteração, aumente VERSAO para limpar o cache antigo.
 */

const VERSAO = 'cristalizacao-v1';

const ARQUIVOS = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.png',
    './icon-512.png',
    './maskable-512.png',
    './apple-touch-icon.png',
];

self.addEventListener('install', (evento) => {
    evento.waitUntil(
        caches.open(VERSAO)
            .then((cache) => cache.addAll(ARQUIVOS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (evento) => {
    evento.waitUntil(
        caches.keys()
            .then((chaves) => Promise.all(
                chaves.filter((chave) => chave !== VERSAO).map((chave) => caches.delete(chave))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (evento) => {
    if (evento.request.method !== 'GET') return;

    evento.respondWith(
        fetch(evento.request)
            .then((resposta) => {
                if (resposta && resposta.status === 200 && resposta.type === 'basic') {
                    const copia = resposta.clone();
                    caches.open(VERSAO).then((cache) => cache.put(evento.request, copia));
                }
                return resposta;
            })
            .catch(() => caches.match(evento.request))
    );
});
