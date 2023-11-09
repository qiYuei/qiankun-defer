const packageName = require("./package.json").name;
const QiankunPlugin = require("@qiankunjs/webpack-plugin");
module.exports = {
  webpack: function (config, env) {
    config.output = {
      ...config.output,
      // publicPath: `http://localhost:${process.env.PORT}/`,
      // library: `${packageName}-[name]`,
      // libraryTarget: 'umd',
      // chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    };
    config.plugins.push(new QiankunPlugin({ webpackVersion: "5" }));
    return config;
  },
};
