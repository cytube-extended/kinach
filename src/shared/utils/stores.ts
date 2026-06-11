import { socketClient } from "$api/socket";
import {
  parseLegacyUserlist,
  subscribeSocketAddUser,
  subscribeSocketUserLeave,
  userlistStore,
} from "$features/chat/userlist";
import {
  requestPlaylist,
  subscribeChangeMedia,
  subscribeSetCurrent,
  subscribeSocketDelete,
  subscribeSocketQueue,
  subscribeVoteskip,
  unsubscribeChangeMedia,
  unsubscribeVoteskip,
} from "$features/player/playlist";
import { appStore } from "$stores/appStore";
import { clientStore } from "$stores/clientStore";
import { pageStore } from "$stores/pageStore";
import { playlistStore } from "$stores/playlistStore";
import { socketStore } from "$stores/socketStore";
import { voteskipStore } from "$stores/voteskipStore";

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
    subscribeSetCurrent(playlistStore.setCurrent);

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

const initVoteskipStore = () => {
  const initialCount = 0;
  const initialNeed = 0;

  voteskipStore.init({ count: initialCount, need: initialNeed });

  const handleSetCount = () => voteskipStore.setCount(0);
  const handleSetVoteskip = ({ count, need }: { count: number; need: number }) =>
    voteskipStore.setVoteskip(count, need);

  subscribeChangeMedia(handleSetCount);
  subscribeVoteskip(handleSetVoteskip);

  const unsubChangeMedia = () => unsubscribeChangeMedia(handleSetCount);
  const unsubVoteskip = () => unsubscribeVoteskip(handleSetVoteskip);

  const unsub = () => {
    unsubChangeMedia();
    unsubVoteskip();
  };

  return unsub;
};

export const initStores = async () => {
  const unsubClient = initClientStore();
  const unsubAppStore = initAppStore();
  initPageStore();
  initSocketStore();
  initUserlistStore();
  const unsubPlaylistStore = await initPlaylistStore();
  const unsubVoteskipStore = initVoteskipStore();

  const unsubAll = () => {
    unsubClient();
    unsubAppStore();
    unsubPlaylistStore();
    unsubVoteskipStore();
  };

  return unsubAll;
};
