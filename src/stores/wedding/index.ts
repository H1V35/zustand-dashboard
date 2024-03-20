import { create } from 'zustand';
import { PersonSlice, createPersonSlice } from './person.slice';

type ShareState = PersonSlice;

export const useWeddingBoundStore = create<ShareState>()((...a) => ({
  ...createPersonSlice(...a),
}));
