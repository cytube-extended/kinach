import { writable } from "svelte/store";

export type AppState = {
  version: string;
};

const defaultAppState: AppState = {
  version: "",
};

const createAppStore = (appStateOverrides?: Partial<AppState>) => {
  const initialAppState = {
    ...defaultAppState,
    ...appStateOverrides,
  };

  const { subscribe, set, update } = writable<AppState>(initialAppState);

  return {
    subscribe,

    init: (state: AppState) => set(state),
    resetVersion: () => update(state => ({ ...state, version: defaultAppState.version })),
    updateVersion: (version: string) => update(state => ({ ...state, version })),
  };
};

export const appStore = createAppStore();
