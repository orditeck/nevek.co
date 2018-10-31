self.__precacheManifest = [
  {
    "url": "/_next/static/aqeravhCeTepPPAb0uZ4l/pages/_app.js"
  },
  {
    "url": "/_next/static/runtime/webpack-80dd23e3eafca5314609.js"
  },
  {
    "url": "/_next/static/runtime/main-09a86bf6c73a8e25806f.js"
  },
  {
    "url": "/_next/static/css/styles.ae8b199c.chunk.css"
  },
  {
    "url": "/_next/static/chunks/styles.657eff96a6cd38ad1259.js"
  },
  {
    "url": "/_next/static/chunks/commons.ec46080cab65bdd23019.js"
  },
  {
    "url": "/_next/static/aqeravhCeTepPPAb0uZ4l/pages/index.js"
  },
  {
    "url": "/_next/static/aqeravhCeTepPPAb0uZ4l/pages/_error.js"
  },
  {
    "url": "/_next/static/aqeravhCeTepPPAb0uZ4l/pages/404.js"
  },
  {
    "url": "/_next/main.js"
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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "precache-manifest.6c432c5028d94e1e1925117ba156149a.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/images/accompagnement.gif",
    "revision": "8b70b604c37c9aecea2fbf22ee0d2ebb"
  },
  {
    "url": "static/images/bg_top_home.jpg",
    "revision": "271e96632d6bf6ec0afcfea13df6b272"
  },
  {
    "url": "static/images/consultation.gif",
    "revision": "931579bf5b0cf641b0eb74ccdb3b88e2"
  },
  {
    "url": "static/images/developpement.gif",
    "revision": "858e3f9369ceefa2c142ed2663f85a49"
  },
  {
    "url": "static/images/engagement.gif",
    "revision": "b8c0648e57dd45c90be0c9698cd1cee9"
  },
  {
    "url": "static/images/logos/arcticpower.jpg",
    "revision": "05c66d0440409902da405be3dc37203a"
  },
  {
    "url": "static/images/logos/frt.jpg",
    "revision": "f07fa8d3a1ecb9d403eafa828b3a238b"
  },
  {
    "url": "static/images/logos/gardaworld.jpg",
    "revision": "fda7cbe7cc5593e7705487b27e84cb84"
  },
  {
    "url": "static/images/logos/garderiedepot.jpg",
    "revision": "4b9df5b429e76c7b76e394f52bf95221"
  },
  {
    "url": "static/images/logos/lacbeauport.jpg",
    "revision": "25d5f1bf6c5ad0a44aee2489f0921563"
  },
  {
    "url": "static/images/logos/laparisienne.jpg",
    "revision": "79d3836e03289c8752d3387585918757"
  },
  {
    "url": "static/images/logos/sthubert.jpg",
    "revision": "8d7386ef0de66cbaee03e83f9deb5f28"
  },
  {
    "url": "static/images/logos/uqac.jpg",
    "revision": "74d700ffbd08e002c15120c9254b7a31"
  },
  {
    "url": "static/images/logos/villesag.jpg",
    "revision": "e458fe3c56a4c08e5c6ebec0e5675fb0"
  },
  {
    "url": "static/images/og_image.jpg",
    "revision": "d8b839a436c89f9dffa86e8806e5497f"
  },
  {
    "url": "static/images/stratege.gif",
    "revision": "f04cd2955fd94c4b08e608c4ae231adb"
  },
  {
    "url": "static/manifest/manifest.json",
    "revision": "1ef803e7191ce80807ef0ae0b556e26a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
