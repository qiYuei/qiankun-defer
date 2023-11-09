console.log("render scripts");
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import "./public-path";
import { createRouter, createWebHistory } from "vue-router";

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container } = props;
  history = createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/vue3-webpack-sub" : "/"
  );
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c%s", "color: green;", "vue3.0 app bootstraped");
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
}

export const b = "11111111111111111111111";

export function sub(props) {}

window["qiankuntest"] = 111111111111;
setTimeout(() => {
  console.log(
    "window----------",
    window["vue3-webpack-sub"],
    window.qiankuntest
  );
});
