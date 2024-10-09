'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2ebb29b78ff862155462d93511eaef8b",
"version.json": "87684fc481023b731b01da61f4c0fb82",
"index.html": "e5c333ed367ff81ab0843b500f10b8fc",
"/": "e5c333ed367ff81ab0843b500f10b8fc",
"main.dart.js": "10950a1d9cc57ff15497be2e53682de3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48b039e99056340869f6f81f4f635684",
"assets/AssetManifest.json": "37a607b84052b5bce3108ec407f337c8",
"assets/NOTICES": "0c21dc74a504e2418517304c479a9ed4",
"assets/FontManifest.json": "d522c6993565eb2e2a5992b301d96d64",
"assets/AssetManifest.bin.json": "aafe3315d8f1c932bd2ba59814f2fa74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3096796afda38242dae98f73de820e22",
"assets/fonts/MaterialIcons-Regular.otf": "95aa8c050a202776ba3316c081833c0d",
"assets/assets/images/no-projects.png": "3429d69415e952675ea5dbdb713e203b",
"assets/assets/images/waving-hand.png": "2a6a95dc5bcf9a3140232f387388b130",
"assets/assets/images/icon.png": "1228a7ee9efe409f022f8ab4df5c4236",
"assets/assets/images/login.png": "973d55ee16aad60cdea506563033d150",
"assets/assets/images/no-internet.png": "fdf3f24894d59e606ec46d9da1afe744",
"assets/assets/images/desktop-login.png": "992d1ad35643582913678a54ea03c606",
"assets/assets/images/pdf-file.png": "3249d80b8a256a44707b48a7d6fae220",
"assets/assets/images/home-top-curve.png": "68827a4a61147d8737d5fde9a0cc045c",
"assets/assets/images/desktop-sidebar-logo.png": "ba176083e55c90ee459de43e19bb931f",
"assets/assets/images/profile-top.png": "76040a4c7ca4946b45b506d49e69f299",
"assets/assets/images/desktop-seperator.png": "23ea52a51c80d85a3de7a57c5feaf204",
"assets/assets/images/need-help-sidebar-background.png": "8767cc3e6615e4b714a8eeddc9290fc0",
"assets/assets/images/about-us.png": "0d59e8dd30950e3f5eabca9c4e4a54b9",
"assets/assets/images/profile-top-curve.png": "24aa3a06c2d5b971929667588631a3cf",
"assets/assets/lotties/splash.json": "eadc7856c931cdc135ab9c71801a3d9a",
"assets/assets/svgs/search.svg": "729ce8552ea28155cdc0226c644ae4f0",
"assets/assets/svgs/change-password.svg": "4dd3ffa619027333021d862fb5bd78e3",
"assets/assets/svgs/no-new_notification.svg": "0f54d934588354cbf6ea186114b9b80a",
"assets/assets/svgs/pdf-file.svg": "eff1dc33c47b88ec9a3054a933b25439",
"assets/assets/svgs/desktop-down-arrow.svg": "39ebfb5a90cd396e1d93fa8c1b7bf520",
"assets/assets/svgs/inspection-complete.svg": "8e2e5acfdbff30179e1108a77ecce75a",
"assets/assets/svgs/right-arrow.svg": "150036953c75633dfdda78cd78f2609a",
"assets/assets/svgs/logout.svg": "5ffec3022e5de10170d1ced4a37dde4c",
"assets/assets/svgs/pdf-close.svg": "a8398b3efea4b23a47473a75cd6f1ded",
"assets/assets/svgs/dropdown-icon.svg": "ba68035901a197354d394ad65beac422",
"assets/assets/svgs/success-mark.svg": "cb7eab3d24d5649ab2fb983688cb34b8",
"assets/assets/svgs/desktop-notification.svg": "a863b135123aed3659b798f7788f0a6c",
"assets/assets/svgs/desktop-profile-setting.svg": "1b86f56f2a3847b57e77ea099097ee33",
"assets/assets/svgs/calendar-two.svg": "c9d79513673e30ffdf9d4bced4650173",
"assets/assets/svgs/down-arrow.svg": "5eccb0d801d3030514d01ca21b1a90eb",
"assets/assets/svgs/left-arrow.svg": "817bdc5046e756b27d8168623fd54f1e",
"assets/assets/svgs/eye-close.svg": "6dfd3a2cf97cfb70fb73f25c13ec3e1c",
"assets/assets/svgs/email.svg": "49b83a65b9e9ef7df534f3a23d051f96",
"assets/assets/svgs/no-search.svg": "4b96310dc27fe3d4f945a7fbafdd337e",
"assets/assets/svgs/notification-bing.svg": "518ecbc82b72a75b98006d271e15d7e7",
"assets/assets/svgs/nav-past-project.svg": "9a982c85a275f0caa04bc07785a3c51f",
"assets/assets/svgs/nav_home.svg": "7b3e875df8ad78dcbc9c08d83074621c",
"assets/assets/svgs/desktop-logout-polygon.svg": "79fb7e64573152fe8e996a923db3a85a",
"assets/assets/svgs/arrow-right-up.svg": "c782e70805e1720887a808c0cff71efc",
"assets/assets/svgs/edit.svg": "0fdafcc170148be67590f7b783134f32",
"assets/assets/svgs/delete-account.svg": "1f0f6f330a2f6906982a57ed3508eb53",
"assets/assets/svgs/delete-account-dialog.svg": "bfbad5d2101ef4a90768a7c512c875d1",
"assets/assets/svgs/about-us.svg": "e2f5813a2c0a8bd51ec3bbf5e74391ce",
"assets/assets/svgs/alert-confirm.svg": "20a4c58c28480b89007721f20f5f5085",
"assets/assets/svgs/eye.svg": "c702cb6859f1e0fc8be8006ecf41738b",
"assets/assets/svgs/leaving.svg": "c9ae2dfb3bfc827b3ca65d20060fe62a",
"assets/assets/svgs/desktop-logout.svg": "1a39a72892e4e22daa362a14119977b1",
"assets/assets/svgs/calendar.svg": "fe4641f782baa85a21f44c91d479d30b",
"assets/assets/svgs/privacy-policy.svg": "0b8a75ff3a4e7485e6a0bde006abca76",
"assets/assets/svgs/nav-search.svg": "ac5b833f3f1010b9ec2a787f89b26ed7",
"assets/assets/svgs/user-agreement.svg": "ab53123ded2c02f205f022c6811d9121",
"assets/assets/svgs/upload.svg": "f1972d6ef6fb1a5f8f0008872785d964",
"assets/assets/svgs/edit-profile.svg": "e628ad094959c2d01309da8ad6df2711",
"assets/assets/svgs/desktop-dashboard.svg": "ad4ded01de08f8c13484565f0cd544f7",
"assets/assets/svgs/desktop-search.svg": "d75c1b23f60e7368af267dd333c34d34",
"assets/assets/svgs/nav-profile.svg": "1c23d3c3f03a8fbd04be83598427716a",
"assets/assets/fonts/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/assets/fonts/Inter-Bold.ttf": "8f2869a84ad71f156a17bb66611ebe22",
"assets/assets/fonts/Inter-Regular.ttf": "6087baf32494adfe1bb91a9cad6aa7cf",
"assets/assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/assets/fonts/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/assets/fonts/Inter-SemiBold.ttf": "58b363a44157bbd785403ab3124fb563",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
