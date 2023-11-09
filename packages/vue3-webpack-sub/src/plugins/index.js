const { RawSource } = require("webpack-sources");
module.exports = class QiankunPlugin {
  constructor(options) {
    this.packageName = options.packageName;
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("QiankunPlugin", (compilation, callback) => {
      this.modifyHtmlAssets(compilation);
      callback();
    });
  }
  modifyHtmlAssets(compilation) {
    Object.keys(compilation.assets).forEach((filename) => {
      if (filename.endsWith(".html")) {
        const htmlSource = compilation.assets[filename].source();
        const htmlString =
          typeof htmlSource === "string"
            ? htmlSource
            : htmlSource.toString("utf-8");

        const modifiedHtml = this.addEntryAttributeToScripts(htmlString);
        // eslint-disable-next-line
        compilation.assets[filename] = new RawSource(modifiedHtml);
      }
    });
  }

  addEntryAttributeToScripts(htmlString) {
    const scriptTags =
      htmlString.match(/<script[^>]*src="[^"]+"[^>]*><\/script>/g) || [];
    // let nonAsyncOrDeferScript = scriptTags.filter((tag) => !/defer|async/.test(tag));
    const nonAsyncOrDeferScripts = scriptTags;
    if (nonAsyncOrDeferScripts.length) {
      const lastScriptTag =
        nonAsyncOrDeferScripts[nonAsyncOrDeferScripts.length - 1];
      const modifiedScriptTag = lastScriptTag.replace(
        "<script",
        "<script entry"
      );
      return htmlString.replace(lastScriptTag, modifiedScriptTag);
    }
    return htmlString;
  }
};
