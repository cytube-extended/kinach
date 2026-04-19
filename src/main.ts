import { overrideCallbacks } from "./callbacks";
import { injectMainStylesheet, injectThemeStylesheet } from "./channelCSS";
import { overrideFavicon } from "./favicon";
import { mountSvelteComponent } from "./mount";

export const init = async () => {
  overrideCallbacks();
  overrideFavicon();

  injectThemeStylesheet();
  injectMainStylesheet();

  mountSvelteComponent();
};
