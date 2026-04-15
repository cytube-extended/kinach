import { createAppVersionForm } from "./appVersionForm";
import { overrideCallbacks } from "./callbacks";
import { injectMainStylesheet } from "./channelCSS";
import { overrideFavicon } from "./favicon";
import { mountSvelteComponent } from "./mount";

export const init = async () => {
  overrideCallbacks();
  overrideFavicon();

  injectMainStylesheet();
  createAppVersionForm();

  mountSvelteComponent();
};
