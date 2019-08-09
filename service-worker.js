self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.ebca37b94be3b7466ce0.js",
    "revision": "636f37bacb490cee95f8"
  },
  {
    "url": "/_next/static/chunks/styles.78de0a868bd4f0bbdb40.js",
    "revision": "b94eba31d1fb7c1723eb"
  },
  {
    "url": "/_next/static/css/styles.6e28cf03.chunk.css",
    "revision": "b94eba31d1fb7c1723eb"
  },
  {
    "url": "/_next/static/runtime/main-13fc484f46996f5d7e1e.js",
    "revision": "338b42dfd8c0647a2613"
  },
  {
    "url": "/_next/static/runtime/webpack-f5e50b6b501ccea2a79b.js",
    "revision": "ae583f202258b164868a"
  },
  {
    "url": "/_next/static/smYGs9DToH7BT0AQdSEUC/pages/404.js",
    "revision": "419b1163d2f58f760889"
  },
  {
    "url": "/_next/static/smYGs9DToH7BT0AQdSEUC/pages/_app.js",
    "revision": "71d25e4dd00261f36394"
  },
  {
    "url": "/_next/static/smYGs9DToH7BT0AQdSEUC/pages/_error.js",
    "revision": "42519176f427de195d44"
  },
  {
    "url": "/_next/static/smYGs9DToH7BT0AQdSEUC/pages/index.js",
    "revision": "f745b2fcf3701a714b34"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/icons/android-chrome-192x192.png",
    "revision": "ead03be5455dd03c35b2f2b185b5415c"
  },
  {
    "url": "static/icons/android-chrome-512x512.png",
    "revision": "801df42cc4dfb9c4b79042a15b11987e"
  },
  {
    "url": "static/icons/apple-touch-icon-precomposed.png",
    "revision": "d2dcd608216d0659282a33a7e21aa109"
  },
  {
    "url": "static/icons/apple-touch-icon.png",
    "revision": "ee5c4236638998cdbfae4126cc2dd61e"
  },
  {
    "url": "static/icons/favicon-16x16.png",
    "revision": "69f0fa8e7bcdb891b3865b7557960d52"
  },
  {
    "url": "static/icons/favicon-32x32.png",
    "revision": "563f46b9e2683313d7c720e3980369d7"
  },
  {
    "url": "static/icons/favicon.ico",
    "revision": "dc6a9c14cfaa02c6794e9600b6f597c4"
  },
  {
    "url": "static/images/accompagnement.gif",
    "revision": "1ac41f240af81280873dda1598ec416e"
  },
  {
    "url": "static/images/bg_top_home-min.jpg",
    "revision": "b9f27e3a1c27c7d5cc2e85a489263061"
  },
  {
    "url": "static/images/consultation.gif",
    "revision": "08307648037e6eb699d98fc8bec3644c"
  },
  {
    "url": "static/images/developpement.gif",
    "revision": "53b49207cd58f3b02d4fc63207628400"
  },
  {
    "url": "static/images/engagement.gif",
    "revision": "e5e705944c2ea04ba9eb48f0c9fe538c"
  },
  {
    "url": "static/images/footer.png",
    "revision": "d48bb8932c55479422b2993214542c4d"
  },
  {
    "url": "static/images/logos/arcticpower.jpg",
    "revision": "0dd191793b1a78ece6e46203b7fc33a6"
  },
  {
    "url": "static/images/logos/frt.jpg",
    "revision": "16fad84d5838041e624e76313f2cf9b6"
  },
  {
    "url": "static/images/logos/gardaworld.jpg",
    "revision": "8a7fbce4ab6d12f6672ecfa7bf4662d6"
  },
  {
    "url": "static/images/logos/garderiedepot.jpg",
    "revision": "d8e9c8d5ebcbb88bedb1f7cf64eed464"
  },
  {
    "url": "static/images/logos/lacbeauport.jpg",
    "revision": "336c7954a4c6074acc0583293e76daf9"
  },
  {
    "url": "static/images/logos/laparisienne.jpg",
    "revision": "510f23709550f29bd5ac076c2d1f79da"
  },
  {
    "url": "static/images/logos/sthubert.jpg",
    "revision": "ce65fd70209090ec0d109af936d09189"
  },
  {
    "url": "static/images/logos/uqac.jpg",
    "revision": "ccaa41a536e7d82e15c15ddbb4f9b591"
  },
  {
    "url": "static/images/logos/villesag.jpg",
    "revision": "d039565070cb7d3843470d9f4188de43"
  },
  {
    "url": "static/images/og_image.jpg",
    "revision": "bcf35ac9f683532e23118188e952721f"
  },
  {
    "url": "static/images/stratege.gif",
    "revision": "a5de86d70b9053059cdefd66f80f01fc"
  },
  {
    "url": "static/images/testimonies/avenir.jpg",
    "revision": "3c36e183494973cca71a63005b050d7f"
  },
  {
    "url": "static/images/testimonies/david.jpg",
    "revision": "1edca45f48d38ba5e5ffa0e805f75eea"
  },
  {
    "url": "static/images/testimonies/example.gif",
    "revision": "ce050ab48d023d1de99ea3d2c6cfd327"
  },
  {
    "url": "static/images/testimonies/mathieu.jpg",
    "revision": "ea21dc9ad98525997894e555a74fae1f"
  },
  {
    "url": "static/images/testimonies/valerie.jpg",
    "revision": "7031224a925e3904d46c52939c0a8bdc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
