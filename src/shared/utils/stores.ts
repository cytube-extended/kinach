import { socketClient } from "$api/socket";
import {
  requestPlaylist,
  subscribeSocketDelete,
  subscribeSocketQueue,
} from "$features/playlist/playlist";
import {
  parseLegacyUserlist,
  subscribeSocketAddUser,
  subscribeSocketUserLeave,
  userlistStore,
} from "$features/userlist/userlist";
import { appStore } from "$stores/appStore";
import { clientStore } from "$stores/clientStore";
import { pageStore } from "$stores/pageStore";
import { playlistStore } from "$stores/playlistStore";
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

const initPlaylistStore = async () => {
  const RETRY_DELAY = 60_000;

  try {
    const initialPlaylist = await requestPlaylist();
    const initialUid = window.PL_CURRENT;

    playlistStore.init({ currentUid: initialUid, playlist: initialPlaylist });

    subscribeSocketQueue(({ after, item }) => playlistStore.addPlaylistItem(item, after));
    subscribeSocketDelete(({ uid }) => playlistStore.removePlaylistItem(uid));

    const unsubPlaylistStore = playlistStore.subscribe(state => {
      window.PL_CURRENT = state.currentUid;
    });

    return unsubPlaylistStore;
  } catch (error) {
    const errMsg = `Failed to get initial playlist: ${error}. Retrying in 60 seconds.`;
    console.warn(errMsg);
    alert(errMsg);
    await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));

    return await initPlaylistStore();
  }
};

export const initStores = async () => {
  const unsubClient = initClientStore();
  const unsubAppStore = initAppStore();
  initPageStore();
  initSocketStore();
  initUserlistStore();
  const unsubPlaylistStore = await initPlaylistStore();

  const unsubAll = () => {
    unsubClient();
    unsubAppStore();
    unsubPlaylistStore();
  };

  return unsubAll;
};
