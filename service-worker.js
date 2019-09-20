var cacheName = 'xujtouch-final-1';// app shell 缓存名字
var dataCacheName = 'xujtouch-v1'; // app shell 的数据缓存
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
];

self.addEventListener('install', function(e) { // 注册 Service Worker
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) { // 激活外壳(app shell)
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