'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "edc48fa1980ee41438cbb477584dcb9f",
"assets/AssetManifest.smcbin": "94c2a082b5d18dfb665d9479a22261e5",
"assets/assets/fonts/Bilbo-Regular.ttf": "9dc76ce1c97dc6e817bff47de843f572",
"assets/assets/images/Bank_Blank.jpg": "345319a25665b4b85dad59d32ad2f33b",
"assets/assets/images/Berge.svg": "652c90bf3022d571db505ef4532b784a",
"assets/assets/images/Bergstation.jpg": "0333ad006f01a111c2e0b407dfb47d0a",
"assets/assets/images/Berg_Klein.svg": "751e9eadc67de0f51bbe60a9523b7d84",
"assets/assets/images/Boden.jpg": "c9c138abb3acdf51a15472d4b2900138",
"assets/assets/images/Buch.png": "ead95759d924a90d3e73a237db3c0be5",
"assets/assets/images/Buch_Blank_Blau.png": "576f6b6f1f28896a39daa80262255729",
"assets/assets/images/Buch_gro%25C3%259F_Blau.png": "a5bb4b1beceada8467baffda8862e82c",
"assets/assets/images/Buch_Offen.png": "12c7959577785bfaf4b7e855757a0cb2",
"assets/assets/images/Elena_mit_Tagebuch.jpg": "038fc8eeb5df11bd989311e72c2eff07",
"assets/assets/images/Elena_ohne_Tagebuch.jpg": "5686740d76cf49fa1413c7bfe6f4ff7a",
"assets/assets/images/Gipfel.jpg": "cbcc37fba91e3a98102720136cfbb8e9",
"assets/assets/images/Gipfel_2.jpg": "042202bbaed1b8c537a62667c76c42c3",
"assets/assets/images/Handy_Transparent.png": "4c1d0dcc9f7d3b6fc7a40f556f75bd1b",
"assets/assets/images/Instagram_Post_Elena.png": "7ecb7825d4f437f03acbec8158237076",
"assets/assets/images/Karte.png": "1c7ebdc8e877d2af7571bdeab3880a38",
"assets/assets/images/Logo_Hintergrund.png": "bf312986be221b697d9db22ce69b7b99",
"assets/assets/images/Logo_Web.png": "4e12ef0baad60e43f9306e608b220cd7",
"assets/assets/images/Logo_Web_Vordergrund.png": "4b47ea58a1891496f0370595d3efe0e3",
"assets/assets/images/Papier.jpg": "260fc3af564771b2df6260d4f7c5df0f",
"assets/assets/images/Schild_Oben.png": "5caeeea03d43d006430c7836578429df",
"assets/assets/images/Schild_Unten.png": "c9f314f5d8a0f22feabba2f28028ee9c",
"assets/assets/images/SchuelerInnen_Bergstation.jpg": "7b72e191db4dd4eda245b12b96629236",
"assets/assets/images/Steine.png": "9202779d597c387db7e412f1378d934a",
"assets/assets/images/Titelbild_EER.jpg": "908561624d8ae2ceb2913cacb0f773c3",
"assets/assets/images/Wand.jpg": "24607691e67afcf8652a8bb9137dd92a",
"assets/assets/images/Wanderweg.jpg": "efefc1f540ffbb1a227ec576ea97dea2",
"assets/assets/images/Wanderweg_2.png": "71db8391788b2d282ba3417e2e48baff",
"assets/assets/images/Wegweiser.jpg": "36400c941e77ddebb133cda8c1c51bd7",
"assets/assets/music/Hintergrundmusik.mp3": "e4333a9f441b4dc3dda0d27aac44de3a",
"assets/FontManifest.json": "3ffb85af99684b5c94f58678a03313ce",
"assets/fonts/MaterialIcons-Regular.otf": "9855c7aa148df2188cd40d23917ee777",
"assets/NOTICES": "62c49e3d2bc3a3e229f0fb09ec75ea6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/hyphenator_impure/hyphenate_patterns/hyph-da.tex": "c3c16b9bc1a0a4d5289b3caf71e01011",
"assets/packages/hyphenator_impure/hyphenate_patterns/hyph-de-1996.tex": "c0efcc10c68f3c2ff922a3dd5a9b4358",
"assets/packages/hyphenator_impure/hyphenate_patterns/hyph-en-us.tex": "a8e06b7542c94f360a1e3f9bec0cd07b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "77503aa64f7ec0485376eff704d768e8",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "99729a5e1a34a52a51ef2c6b23298649",
"icons/Icon-512.png": "f9c40f42fe163e6d7e86a26ea791a2e6",
"icons/Icon-maskable-192.png": "99729a5e1a34a52a51ef2c6b23298649",
"icons/Icon-maskable-512.png": "f9c40f42fe163e6d7e86a26ea791a2e6",
"index.html": "95258155875b6aa2a13ed51fae6772ca",
"/": "95258155875b6aa2a13ed51fae6772ca",
"main.dart.js": "bce4977b14f3863f96fd31d3af0653c6",
"manifest.json": "ac2ff8463f13975395ad7e247afdf318",
"version.json": "c1f4319103b70bb9cb822f2c31a1b6c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
