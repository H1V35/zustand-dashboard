import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { type PersonSlice, createPersonSlice } from './person.slice';
import { type GuestsSlice, createGuestsSlice } from './guests.slice';

type ShareState = PersonSlice & GuestsSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestsSlice(...a),
  }))
);
