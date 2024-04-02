import { create } from 'zustand';
import User from '../Common/Types/User/User';

type generalStoreValues = {
  currentUser: User | undefined;
  setUser: (user: User) => void;
};

export const useGeneralStore = create<generalStoreValues>((set) => ({
  currentUser: undefined,
  setUser: (user: User) => set(() => ({ currentUser: user })),
}));
