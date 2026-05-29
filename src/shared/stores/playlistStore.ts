import { writable } from "svelte/store";
import type { Playlist, PlaylistItem } from "$features/playlist/playlist";

export type PlaylistState = {
  currentUid: number;
  playlist: Playlist;
};

const defaultPlaylistState: PlaylistState = {
  currentUid: -1,
  playlist: [],
};

const createPlaylistStore = (playlistStateOverrides?: Partial<PlaylistState>) => {
  const initialPlaylistState = {
    ...defaultPlaylistState,
    ...playlistStateOverrides,
  };

  const { subscribe, set, update } = writable<PlaylistState>(initialPlaylistState);

  return {
    subscribe,

    addPlaylistItem: (item: PlaylistItem, after: number) =>
      update(state => ({ ...state, playlist: [...state.playlist].splice(after, 0, item) })),
    init: (state: PlaylistState) => set(state),
    removePlaylistItem: (index: number) =>
      update(state => ({ ...state, playlist: [...state.playlist].splice(index, 1) })),
    resetPlaylist: () => set(defaultPlaylistState),
    setCurrent: (uid: number) => update(state => ({ ...state, currentUid: uid })),
    setPlaylist: (playlist: Playlist) => update(state => ({ ...state, playlist })),
  };
};

export const playlistStore = createPlaylistStore();
