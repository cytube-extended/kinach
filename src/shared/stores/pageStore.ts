import { writable } from "svelte/store";

export type PageState = {
  csrf: string;
};

const defaultPageState: PageState = {
  csrf: "",
};

const createPageStore = (pageStateOverrides?: Partial<PageState>) => {
  const initialPageState = {
    ...defaultPageState,
    ...pageStateOverrides,
  };

  const { subscribe, set, update } = writable<PageState>(initialPageState);

  return {
    subscribe,

    init: (state: PageState) => set(state),
    resetCSRF: () => update(state => ({ ...state, csrf: defaultPageState.csrf })),
    updateCSRF: (csrf: string) => update(state => ({ ...state, csrf })),
  };
};

export const pageStore = createPageStore();
