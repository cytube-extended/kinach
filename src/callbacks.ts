import { overrideChannelCSS } from "./channelCSS";
import { overrideChannelJS } from "./channelJS";

export const overrideCallbacks = () => {
  window.Callbacks.channelCSSJS = function ({ css, js }) {
    if (css) {
      overrideChannelCSS(css);
    }

    if (js) {
      overrideChannelJS(js);
    }
  };
};
