import { initStores } from "$utils/stores";
import { initOverrides } from "$utils/overrides";
import { upgradeLegacyElements } from "$utils/upgrades";

export const init = async () => {
  const unsubStores = initStores();

  try {
    await initOverrides();
    await upgradeLegacyElements();
  } catch (err) {
    unsubStores();

    throw err;
  }
};
