import { type StateCreator, create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value: string) => set((_state) => ({ firstName: value })),
  setLastName: (value: string) => set((_state) => ({ lastName: value })),
});

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    console.log('getItem', name);
    return null;
  },

  setItem: function (name: string, value: string): void | Promise<void> {
    console.log('setItem', { name, value });
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name);
  },
};

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: 'person-storage',
    storage: createJSONStorage(() => sessionStorage),
  })
);
