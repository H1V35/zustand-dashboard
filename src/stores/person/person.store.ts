import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

export const usePersonStore = create<PersonState & Actions>()(
  persist(
    (set) => ({
      firstName: '',
      lastName: '',

      setFirstName: (value: string) => set((_state) => ({ firstName: value })),
      setLastName: (value: string) => set((_state) => ({ lastName: value })),
    }),
    { name: 'person-storage' }
  )
);
