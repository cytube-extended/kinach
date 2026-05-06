import { tick } from "svelte";

const upgradeBody = () => {
  document.body.classList.add("dark");
  document.body.classList.add("override-theme");
};

export const upgradeLegacyElements = async () => {
  upgradeBody();

  await tick();
};
