import { type StateCreator, create } from 'zustand';
import { AuthService } from '@/services/auth.service';
import type { AuthStatus, User } from '@/interfaces';
import { devtools, persist } from 'zustand/middleware';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
}

const authStoreApi: StateCreator<AuthState> = (set) => ({
  status: 'unauthorized',
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: 'authorized', token, user });
    } catch (error) {
      set({ status: 'unauthorized', token: undefined, user: undefined });
    }
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(authStoreApi, { name: 'auth-storage' }))
);
