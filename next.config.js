const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const offline = require('next-offline');

module.exports = withPlugins(
    [
        sass,
        offline
    ], {
        distDir: 'build'
    });
