eval(
  '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   b: function() { return /* binding */ b; },\n/* harmony export */   bootstrap: function() { return /* binding */ bootstrap; },\n/* harmony export */   mount: function() { return /* binding */ mount; },\n/* harmony export */   sub: function() { return /* binding */ sub; },\n/* harmony export */   unmount: function() { return /* binding */ unmount; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/.pnpm/vue@3.3.7/node_modules/vue/dist/vue.runtime.esm-bundler.js");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store/index.js");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-path */ "./src/public-path.js");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "../../node_modules/.pnpm/vue-router@4.2.5_vue@3.3.7/node_modules/vue-router/dist/vue-router.mjs");\nconsole.log("render scripts");\n\n\n\n\n\n\nlet router = null;\nlet instance = null;\nlet history = null;\nfunction render(props = {}) {\n  const {\n    container\n  } = props;\n  history = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHistory)(window.__POWERED_BY_QIANKUN__ ? "/vue3-webpack-sub" : "/");\n  router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({\n    history,\n    routes: _router__WEBPACK_IMPORTED_MODULE_2__["default"]\n  });\n  instance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);\n  instance.use(router);\n  instance.use(_store__WEBPACK_IMPORTED_MODULE_3__["default"]);\n  instance.mount(container ? container.querySelector("#app") : "#app");\n}\nif (!window.__POWERED_BY_QIANKUN__) {\n  render();\n}\nasync function bootstrap() {\n  console.log("%c%s", "color: green;", "vue3.0 app bootstraped");\n}\nasync function mount(props) {\n  render(props);\n}\nasync function unmount() {\n  instance.unmount();\n  instance._container.innerHTML = "";\n  instance = null;\n  router = null;\n  history.destroy();\n}\nconst b = "11111111111111111111111";\nfunction sub(props) {}\nwindow["qiankuntest"] = 111111111111;\nsetTimeout(() => {\n  console.log("window----------", window["vue3-webpack-sub"], window.qiankuntest);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZTMtd2VicGFjay1zdWItLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcInJlbmRlciBzY3JpcHRzXCIpO1xuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAudnVlXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgXCIuL3B1YmxpYy1wYXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tIFwidnVlLXJvdXRlclwiO1xuXG5sZXQgcm91dGVyID0gbnVsbDtcbmxldCBpbnN0YW5jZSA9IG51bGw7XG5sZXQgaGlzdG9yeSA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbmRlcihwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSBwcm9wcztcbiAgaGlzdG9yeSA9IGNyZWF0ZVdlYkhpc3RvcnkoXG4gICAgd2luZG93Ll9fUE9XRVJFRF9CWV9RSUFOS1VOX18gPyBcIi92dWUzLXdlYnBhY2stc3ViXCIgOiBcIi9cIlxuICApO1xuICByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIGhpc3RvcnksXG4gICAgcm91dGVzLFxuICB9KTtcblxuICBpbnN0YW5jZSA9IGNyZWF0ZUFwcChBcHApO1xuICBpbnN0YW5jZS51c2Uocm91dGVyKTtcbiAgaW5zdGFuY2UudXNlKHN0b3JlKTtcbiAgaW5zdGFuY2UubW91bnQoY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpIDogXCIjYXBwXCIpO1xufVxuXG5pZiAoIXdpbmRvdy5fX1BPV0VSRURfQllfUUlBTktVTl9fKSB7XG4gIHJlbmRlcigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zb2xlLmxvZyhcIiVjJXNcIiwgXCJjb2xvcjogZ3JlZW47XCIsIFwidnVlMy4wIGFwcCBib290c3RyYXBlZFwiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdW50KHByb3BzKSB7XG4gIHJlbmRlcihwcm9wcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bm1vdW50KCkge1xuICBpbnN0YW5jZS51bm1vdW50KCk7XG4gIGluc3RhbmNlLl9jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgaW5zdGFuY2UgPSBudWxsO1xuICByb3V0ZXIgPSBudWxsO1xuICBoaXN0b3J5LmRlc3Ryb3koKTtcbn1cblxuZXhwb3J0IGNvbnN0IGIgPSBcIjExMTExMTExMTExMTExMTExMTExMTExXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWIocHJvcHMpIHt9XG5cbndpbmRvd1tcInFpYW5rdW50ZXN0XCJdID0gMTExMTExMTExMTExO1xuc2V0VGltZW91dCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwid2luZG93LS0tLS0tLS0tLVwiLFxuICAgIHdpbmRvd1tcInZ1ZTMtd2VicGFjay1zdWJcIl0sXG4gICAgd2luZG93LnFpYW5rdW50ZXN0XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n'
);
