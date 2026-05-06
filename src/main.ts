import { initStores } from "$utils/stores";
import { initOverrides } from "$utils/overrides";
import { mountSvelteComponent } from "./mount";

export const init = async () => {
  const unsubStores = initStores();

  try {
    await initOverrides();

    mountSvelteComponent();
  } catch (err) {
    unsubStores();

    throw err;
  }
};
