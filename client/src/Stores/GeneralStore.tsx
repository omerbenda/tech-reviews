import { create } from 'zustand';
import User from '../Common/Types/User/User';

type generalStoreValues = {
  currentUser: User | undefined;
  setCurrentUser: (user: User) => void;
};

export const useGeneralStore = create<generalStoreValues>((set) => ({
  currentUser: undefined,
  setCurrentUser: (user: User) => set(() => ({ currentUser: user })),
}));
