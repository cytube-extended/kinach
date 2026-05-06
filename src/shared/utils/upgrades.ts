import { mount, tick } from "svelte";
import Header from "$components/layout/Header.svelte";

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
  upgradeBody();
  await upgradeNavbar();

  await tick();
};
