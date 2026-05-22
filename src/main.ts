import { mount } from "svelte";
import { initOverrides } from "$utils/overrides";
import { initStores } from "$utils/stores";
import App from "./App.svelte";

const CYTUBE_ELEMENT_IDS = [
  "wrap",
  "useroptions",
  "emotelist",
  "channeloptions",
  "pmbar",
  "footer",
  "usertheme",
];

const CYTUBE_STYLESHEET_LINKS = [
  "//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
  "/css/sticky-footer-navbar.css",
  "/css/videojs-resolution-switcher.css",
  "/css/video-js.css",
  "/css/cytube.css",
];

const cleanup = () => {
  CYTUBE_STYLESHEET_LINKS.forEach(link => {
    const el = document.querySelector(`link[href="${link}"]`);
    if (el) {
      el.remove();
    }
  });

  CYTUBE_ELEMENT_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.remove();
    }
  });
};

const injectStylesheet = (url: URL): Promise<void> =>
  new Promise((resolve, reject) => {
    const el = document.createElement("link");

    el.rel = "stylesheet";
    el.type = "text/css";
    el.href = url.toString();

    el.onload = () => resolve();
    el.onerror = error => reject(new Error(`failed to load stylesheet: ${error}`));

    document.head.appendChild(el);
  });

const showChatInfo = (message: string) => {
  const msgEl = document.createElement("div");
  msgEl.className = "server-msg-reconnect";
  msgEl.style = `border: 1px solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;`;
  msgEl.textContent = message;

  const msgBuf = document.getElementById("messagebuffer");
  if (msgBuf) {
    msgBuf.appendChild(msgEl);
  }

  return msgEl;
};

const addStyles = async () => {
  const stylesNotification = showChatInfo("Loading styles...");
  const stylesheetURL = new URL("dist/index.css", window.BASE_URL);

  await injectStylesheet(stylesheetURL);

  stylesNotification.remove();
};

export const init = async () => {
  const unsubStores = initStores();

  try {
    await addStyles();
    cleanup();
    initOverrides();
    mount(App, { target: document.body });
  } catch (err) {
    unsubStores();

    throw err;
  }
};
