import { StateStorage, createJSONStorage } from 'zustand/middleware';

const firebaseUrl =
  'https://zustand-storage-hive-default-rtdb.europe-west1.firebasedatabase.app/zustand';

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) => res.json());
      return JSON.stringify(data);
    } catch (error) {
      console.log('Error: ', error);
      throw error;
    }
  },

  setItem: async function (name: string, value: string): Promise<void> {
    // TODO: Avoid race condition with AbortController provided by Axios
    await fetch(`${firebaseUrl}/${name}.json`, {
      method: 'PUT',
      body: value,
    }).then((res) => res.json());

    return;
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name);
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);
