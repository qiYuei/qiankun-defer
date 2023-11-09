const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: false,
  lintOnSave: "warning",
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    port: "54616",
    open: true,
    client: {
      overlay: false,
    },
  },
});
