export const injectLegacyThemeStylesheet = () => {
  const url = new URL("dist/theme.css", window.BASE_URL);
  const link = document.createElement("link");

  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url.toString();

  document.head.appendChild(link);
};

export const injectMainStylesheet = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const url = new URL("dist/index.css", window.BASE_URL);
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url.toString();

    link.onload = () => requestAnimationFrame(() => resolve());
    link.onerror = () => requestAnimationFrame(() => reject());

    document.head.appendChild(link);
  });
};

export const removeLegacyStylesheets = () => {
  const hrefs = [
    "//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
    "/css/sticky-footer-navbar.css",
    "/css/videojs-resolution-switcher.css",
    "/css/video-js.css",
    "/css/cytube.css",
  ];

  for (const href of hrefs) {
    const el = document.querySelector(`link[href="${href}"]`);
    if (!el) {
      return;
    }

    el.remove();
  }

  document.getElementById("usertheme")?.remove();
};
