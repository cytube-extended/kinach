import { mount, tick } from "svelte";
import Header from "$components/layout/Header.svelte";

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

const upgradeBody = () => {
  document.body.classList.add("dark");
  document.body.classList.add("override-theme");
};

const upgradeNavbar = async () => {
  const navCol = document.getElementsByTagName("nav");
  if (!navCol) {
    throw new Error("no nav element found");
  }

  if (navCol.length < 1) {
    throw new Error("no nav elements found");
  }

  const [navEl] = navCol;
  if (!navEl) {
    throw new Error("empty nav collection");
  }

  const navParent = navEl.parentElement;
  if (!navParent) {
    throw new Error("no nav parent found");
  }

  const toPrepend = navParent.childNodes.length > 1 && navParent.firstChild;

  navEl.remove();
  mount(Header, {
    target: navParent,
    anchor: toPrepend ? navParent.firstChild : undefined,
  });
};

export const upgradeLegacyElements = async () => {
  removeLegacyModals();

  upgradeBody();
  await upgradeNavbar();

  await tick();
};
