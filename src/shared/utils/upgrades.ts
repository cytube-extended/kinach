import { mount, tick } from "svelte";
import Header from "$components/layout/Header.svelte";
import Main from "$components/layout/Main.svelte";

const removeLegacyWrap = () => {
  const wrap = document.getElementById("wrap");
  if (wrap) {
    wrap.remove();
  }
};

const removeLegacyModals = () => {
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
};

const removeLegacyFooter = () => {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.remove();
  }
};

const upgradeBody = () => {
  document.body.className = `dark override-theme min-h-screen flex flex-col`;
};

const addHeader = async () => {
  mount(Header, {
    target: document.body,
    anchor: document.body.firstChild ? document.body.firstChild : undefined,
  });
};

const addMain = async () => {
  mount(Main, {
    target: document.body,
    anchor: document.body.firstChild ? document.body.firstChild : undefined,
  });
};

export const upgradeLegacyElements = async () => {
  removeLegacyWrap();
  removeLegacyModals();
  removeLegacyFooter();

  upgradeBody();
  await addMain();
  await addHeader();

  await tick();
};
