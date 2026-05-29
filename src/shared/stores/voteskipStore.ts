import { writable } from "svelte/store";

export type VoteskipState = {
  count: number;
  need: number;
};

const defaultVoteskipState: VoteskipState = {
  count: 0,
  need: 0,
};

const createVoteskipStore = (voteskipStateOverrides?: Partial<VoteskipState>) => {
  const initialVoteskipState = {
    ...defaultVoteskipState,
    ...voteskipStateOverrides,
  };

  const { subscribe, set, update } = writable<VoteskipState>(initialVoteskipState);

  return {
    subscribe,

    init: (state: VoteskipState) => set(state),
    setCount: (count: number) => update(state => ({ ...state, count })),
    setNeed: (need: number) => update(state => ({ ...state, need })),
    setVoteskip: (count: number, need: number) => update(state => ({ ...state, count, need })),
  };
};

export const voteskipStore = createVoteskipStore();
