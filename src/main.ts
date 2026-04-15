import { overrideCallbacks } from "./callbacks";
import { overrideFavicon } from "./favicon";

export const init = async () => {
  overrideCallbacks();
  overrideFavicon();
};
