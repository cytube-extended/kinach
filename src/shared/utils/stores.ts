import { socketClient } from "$api/socket";
import {
  parseLegacyUserlist,
  subscribeSocketAddUser,
  subscribeSocketUserLeave,
  userlistStore,
} from "$features/userlist/userlist";
import { appStore } from "$stores/appStore";
import { clientStore } from "$stores/clientStore";
import { pageStore } from "$stores/pageStore";
import { socketStore } from "$stores/socketStore";

const initClientStore = () => {
  clientStore.init({ ...window.CLIENT });

  const unsubClient = clientStore.subscribe(state => {
    window.CLIENT = state;
  });

  return unsubClient;
};

const initPageStore = () => {
  const el = document.querySelector<HTMLInputElement>('input[name="_csrf"]');
  if (!el) {
    throw new Error("CSRF element not found");
  }

  const csrf = el.value;
  if (!csrf) {
    throw new Error("CSRF token not found");
  }

  pageStore.init({ csrf });
};

const initAppStore = () => {
  appStore.init({ version: window.VERSION });

  const unsubAppStore = appStore.subscribe(state => {
    window.VERSION = state.version;
  });

  return unsubAppStore;
};

const initSocketStore = () => {
  socketStore.init(socketClient);

  socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected));
  socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
};

const initUserlistStore = () => {
  const userlist = parseLegacyUserlist();

  userlistStore.init({ userlist });

  subscribeSocketAddUser(userlistStore.addUser);
  subscribeSocketUserLeave(({ name }) => userlistStore.removeUser(name));
};

export const initStores = () => {
  const unsubClient = initClientStore();
  const unsubAppStore = initAppStore();
  initPageStore();
  initSocketStore();
  initUserlistStore();

  const unsubAll = () => {
    unsubClient();
    unsubAppStore();
  };

  return unsubAll;
};
