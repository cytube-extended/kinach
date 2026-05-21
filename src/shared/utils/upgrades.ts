import { mount } from "svelte";
import App from "../../App.svelte";

const cleanup = () => {
  const wrap = document.getElementById("wrap");
  if (wrap) {
    wrap.remove();
  }

  const useroptions = document.getElementById("useroptions");
  if (useroptions) {
    useroptions.remove();
  }

  const emotelist = document.getElementById("emotelist");
  if (emotelist) {
    emotelist.remove();
  }

  const channeloptions = document.getElementById("channeloptions");
  if (channeloptions) {
    channeloptions.remove();
  }

  const pmbar = document.getElementById("pmbar");
  if (pmbar) {
    pmbar.remove();
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.remove();
  }
};

export const upgradeLegacyElements = async () => {
  cleanup();
  mount(App, { target: document.body });
};
