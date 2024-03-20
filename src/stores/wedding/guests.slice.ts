import { StateCreator } from 'zustand';

export interface GuestsSlice {
  guestsCount: number;

  setGuestsCount: (guestsCount: number) => void;
}

export const createGuestsSlice: StateCreator<GuestsSlice> = (set) => ({
  guestsCount: 0,

  setGuestsCount: (guestsCount: number) =>
    set({
      guestsCount: guestsCount > 0 ? guestsCount : 0,
    }),
});
