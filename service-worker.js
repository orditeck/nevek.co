self.__precacheManifest = [
  {
    "url": "/_next/static/MDcthjR9RGyKERyCz_xeU/pages/index.js"
  },
  {
    "url": "/_next/static/chunks/commons.ff681317a71012bab4ec.js"
  },
  {
    "url": "/_next/static/runtime/main-f3ad2d1af0848e42930c.js"
  },
  {
    "url": "/_next/static/chunks/styles.9b0e64dac05461ea14d5.js"
  },
  {
    "url": "/_next/static/css/styles.bb75a65d.chunk.css"
  },
  {
    "url": "/_next/static/runtime/webpack-89179faa512dd01fbb62.js"
  },
  {
    "url": "/_next/static/MDcthjR9RGyKERyCz_xeU/pages/_error.js"
  },
  {
    "url": "/_next/static/MDcthjR9RGyKERyCz_xeU/pages/_app.js"
  },
  {
    "url": "/_next/static/MDcthjR9RGyKERyCz_xeU/pages/404.js"
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
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/icons/android-chrome-192x192.png",
    "revision": "606ae2c2a561140fb6da48090bd5747e"
  },
  {
    "url": "static/icons/android-chrome-512x512.png",
    "revision": "dba09596a968c4231206f78268138bfe"
  },
  {
    "url": "static/icons/apple-touch-icon-precomposed.png",
    "revision": "4f905e034d52d191c855cfa2259a96de"
  },
  {
    "url": "static/icons/apple-touch-icon.png",
    "revision": "46d4bf3f6d45268a73302907868b544e"
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
    "url": "static/images/footer.png",
    "revision": "ddb84334d5e566a41033f7fbbbb0d727"
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
    "revision": "4396ed19165d212dcae62d3063cdc8b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
