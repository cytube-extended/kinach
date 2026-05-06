import { socketClient } from "$api/socket";
import { appStore } from "$stores/appStore";
import { clientStore } from "$stores/clientStore";
import { pageStore } from "$stores/pageStore";
import { socketStore } from "$stores/socketStore";

const initClientStore = () => {
  clientStore.init({ ...window.CLIENT });

  const unsubClient = clientStore.subscribe((state) => {
    window.CLIENT = state;
  });

  return unsubClient;
};

const initPageStore = () => {
  const csrfCol = document.getElementsByName("_csrf");
  if (!csrfCol) {
    throw new Error("no csrf collection found");
  }

  if (csrfCol.length < 1) {
    throw new Error("no csrf elements found");
  }

  const csrfEl = csrfCol.item(0) as HTMLInputElement;
  if (!csrfEl) {
    throw new Error("no csrf element found");
  }

  const csrf = csrfEl.value;
  if (!csrf) {
    throw new Error("no csrf value found");
  }

  pageStore.init({ csrf });
};

const initAppStore = () => {
  appStore.init({ version: window.VERSION });

  const unsubAppStore = appStore.subscribe((state) => {
    window.VERSION = state.version;
  });

  return unsubAppStore;
};

const initSocketStore = () => {
  socketStore.init(socketClient);

  socketClient.on("connect", () =>
    socketStore.updateConnected(socketClient.connected),
  );
  socketClient.on("disconnect", () =>
    socketStore.updateConnected(socketClient.connected),
  );
};

export const initStores = () => {
  const unsubClient = initClientStore();
  const unsubAppStore = initAppStore();
  initPageStore();
  initSocketStore();

  const unsubAll = () => {
    unsubClient();
    unsubAppStore();
  };

  return unsubAll;
};
