import type { AuthStatus, User } from '@/interfaces';
import { StateCreator } from 'zustand';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
}

export const authStoreApi: StateCreator<AuthState> = (_set) => ({
  status: 'unauthorized',
  token: undefined,
  user: undefined,
});
