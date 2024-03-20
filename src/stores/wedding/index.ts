import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { type PersonSlice, createPersonSlice } from './person.slice';
import { type GuestsSlice, createGuestsSlice } from './guests.slice';
import { type DateSlice, createDateSlice } from './date.slice';
import { type ConfirmationSlice, createConfirmationSlice } from './confirmation.slice';

type ShareState = PersonSlice & GuestsSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestsSlice(...a),
    ...createDateSlice(...a),
    ...createConfirmationSlice(...a),
  }))
);
