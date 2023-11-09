const { defineConfig } = require("@vue/cli-service");
const { version: webpackVersion } = require("webpack");
const packageName = require("./package.json").name;
const path = require("path");
// const QiankunPlugin = require("@qiankunjs/webpack-plugin");
const QiankunPlugin = require("./src/plugins/index");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: "warning",
  devServer: {
    port: "33577",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      overlay: false,
    },
  },
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     webpack: path.resolve(__dirname, "./node_modules/webpack/lib/index.js"),
    //   },
    // },
    output: {
      library: `${packageName}`,
      libraryTarget: "window", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
    plugins: [new QiankunPlugin({ webpackVersion: "5" })],
  },
});
