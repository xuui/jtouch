var cacheName = 'xujtouch-final-1';// app shell 缓存名字
var dataCacheName = 'xujtouch-v1'; // app shell 的数据缓存
var filesToCache = [ // app shell 需要的缓存的文件列表
  '/jtouch/',
  '/jtouch/index.html',
  '/jtouch/frameworks/swiper.css',
  '/jtouch/frameworks/jquery.min.js',
  '/jtouch/frameworks/jquery.min.js',
  '/jtouch/frameworks/swiper.min.js',
  '/jtouch/frameworks/jqt.js',
  '/jtouch/resources/base.css',
  '/jtouch/resources/flex.css',
  '/jtouch/resources/grids.css',
  '/jtouch/resources/jqtouch-animation.css',
  '/jtouch/resources/jqtouch-button.css',
  '/jtouch/resources/jqtouch-core.css',
  '/jtouch/resources/jqtouch-theme.css',
  '/jtouch/resources/jqtouch-ui.css',
  '/jtouch/resources/jqtouch.css',
  '/jtouch/resources/jqtouch.min.css',
  '/jtouch/resources/xu.tabpanel.js',
  '/jtouch/resources/xujtouch.js',
  '/jtouch/resources/xutabs.js',
  '/jtouch/resources/fonts/MaterialIcons-Regular.eot',
  '/jtouch/resources/fonts/MaterialIcons-Regular.ijmap',
  '/jtouch/resources/fonts/MaterialIcons-Regular.svg',
  '/jtouch/resources/fonts/MaterialIcons-Regular.ttf',
  '/jtouch/resources/fonts/MaterialIcons-Regular.woff',
  '/jtouch/resources/fonts/MaterialIcons-Regular.woff2',
  '/jtouch/resources/fonts/material-icons.css',
  '/jtouch/resources/fonts/mdicons.json',
  '/jtouch/resources/launch/launch.jpg',
  '/jtouch/resources/icons/icon-128x128.png',
  '/jtouch/resources/icons/icon-144x144.png',
  '/jtouch/resources/icons/icon-152x152.png',
  '/jtouch/resources/icons/icon-192x192.png',
  '/jtouch/resources/icons/icon-256x256.png'
];

self.addEventListener('install',function(e){ // 注册 Service Worker
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
/*
self.addEventListener('activate',function(e){ // 激活外壳(app shell)
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
/*/
self.addEventListener('fetch',function(e){
  e.respondWith(caches.match(e.request).then(function(response){
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(e.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(e.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/jtouch/resources/icons/icon-256x256.png');
      });
    }
  }));
});
/*
self.addEventListener('fetch',function(e){ //清理应用程序的外壳(app shell)缓存，并不会删除数据缓存。
  console.log('[Service Worker] Fetch',e.request.url);
  var dataUrl = 'https://cdn.xuui.net/jtouch/resources/fonts/mdicons.json';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
*/