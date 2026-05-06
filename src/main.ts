import { initStores } from "$utils/stores";
import { overrideCallbacks } from "./callbacks";
import { injectMainStylesheet, injectThemeStylesheet } from "./channelCSS";
import { overrideFavicon } from "./favicon";
import { mountSvelteComponent } from "./mount";

export const init = async () => {
  const unsubStores = initStores();

  try {
    overrideCallbacks();
    overrideFavicon();

    injectThemeStylesheet();
    injectMainStylesheet();

    mountSvelteComponent();
  } catch (err) {
    unsubStores();

    throw err;
  }
};
