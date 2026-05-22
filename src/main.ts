import { initOverrides } from "$utils/overrides";
import { initStores } from "$utils/stores";
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
