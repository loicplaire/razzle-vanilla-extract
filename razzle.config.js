"use strict";
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  options: {
    verbose: true,
    debug: {
      // config: true,
    },
  },
  modifyWebpackConfig({ env, webpackConfig }) {
    const config = webpackConfig;
    config.plugins.push(new VanillaExtractPlugin());
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    config.resolve = {
      ...config.resolve,
      fallback: {
        path: require.resolve("path-browserify"),
        // util: require.resolve("util/"),
      },
    };
    return config;
  },
  modifyWebpackOptions({
    env: {
      target, // the target 'node' or 'web'
      dev, // is this a development build? true or false
    },
    options: {
      webpackOptions, // the default options that will be used to configure webpack/ webpack loaders and plugins
    },
  }) {
    webpackOptions.notNodeExternalResMatch = (request, context) => {
      return /@getatomi\/neon/.test(request) || /intl-tel-input/.test(request);
    };
    webpackOptions.babelRule.include = webpackOptions.babelRule.include.concat([
      /@getatomi\/neon/,
      /intl-tel-input/,
    ]);
    return webpackOptions;
  },
};
