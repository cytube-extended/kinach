import { initStores } from "$utils/stores";
import { initOverrides } from "$utils/overrides";

export const init = async () => {
  const unsubStores = initStores();

  try {
    await initOverrides();
  } catch (err) {
    unsubStores();

    throw err;
  }
};
