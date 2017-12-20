(function() {
  'use strict'

  var filesToCache = [
    '.',
    'style/main.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    'images/still_life-1600_large_2x.jpg',
    'images/still_life-800_large_1x.jpg',
    'images/still_life_small.jpg',
    'images/still_life_medium.jpg',
    'index.html',
    'pages/offline.html',
    'pages/404.html'
  ]

  var staticCacheName = 'pages-cache-v1'

  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets')
    event.waitUntil(
      caches.open(staticCacheName).then(function(cache) {
        return cache.addAll(filesToCache)
      })
    )
  })

  // TODO 3 - intercept network requests

  // TODO 7 - delete unused caches
})()
