var cacheName = 'xuTtouch-final-1';// app shell 缓存名字
var dataCacheName = 'xuTtouch-v1'; // app shell 的数据缓存
var filesToCache = [ // app shell 需要的缓存的文件列表
  '',
  'index.html',
  'frameworks/swiper.css',
  'frameworks/jquery.min.js',
  'frameworks/jquery.min.js',
  'frameworks/swiper.min.js',
  'frameworks/jqt.js',
  'resources/base.css',
  'resources/flex.css',
  'resources/grids.css',
  'resources/jqtouch-animation.css',
  'resources/jqtouch-button.css',
  'resources/jqtouch-core.css',
  'resources/jqtouch-theme.css',
  'resources/jqtouch-ui.css',
  'resources/jqtouch.css',
  'resources/jqtouch.min.css',
  'resources/xu.tabpanel.js',
  'resources/xujtouch.js',
  'resources/xutabs.js',
  'resources/fonts/MaterialIcons-Regular.eot',
  'resources/fonts/MaterialIcons-Regular.ijmap',
  'resources/fonts/MaterialIcons-Regular.svg',
  'resources/fonts/MaterialIcons-Regular.ttf',
  'resources/fonts/MaterialIcons-Regular.woff',
  'resources/fonts/MaterialIcons-Regular.woff2',
  'resources/fonts/material-icons.css',
  'resources/fonts/mdicons.json',
  'resources/launch/launch.jpg',
  'resources/icons/icon-128x128.png',
  'resources/icons/icon-144x144.png',
  'resources/icons/icon-152x152.png',
  'resources/icons/icon-192x192.png',
  'resources/icons/icon-256x256.png'
];

self.addEventListener('install',function(e){ // 注册 Service Worker
  console.log('[ServiceWorker] Install');
  /*e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );*/
});

self.addEventListener('activate',function(e){ // 激活外壳(app shell)
  console.log('[ServiceWorker] Activate');
  /*e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );*/
  return self.clients.claim();
});

//*/
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
        return caches.match('resources/icons/icon-256x256.png');
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