import { createAppVersionForm } from "./appVersionForm";
import { overrideCallbacks } from "./callbacks";
import { injectMainStylesheet } from "./channelCSS";
import { overrideFavicon } from "./favicon";

export const init = async () => {
  overrideCallbacks();
  overrideFavicon();

  injectMainStylesheet();
  createAppVersionForm();
};
