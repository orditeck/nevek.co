const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const offline = require('next-offline');
const manifest = require('next-manifest');

module.exports = withPlugins(
    [sass, offline, [manifest, {
        manifest: {
            "name": "Nevek.co",
            "short_name": "nevek.co",
            "start_url": "/",
            "display": "standalone",
            "background_color": "#FFE066",
            "theme_color": "#FFE066",
            icons: false
        }
    }]
    ], {
        distDir: 'build'
    });
