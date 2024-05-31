import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  userId: string | null;
  setUserId: (id: string) => void;
}

const useUserStore = create<StoreState>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id: string) => set({ userId: id }),
    }),
    {
      name: 'userId',
      getStorage: () => sessionStorage,
    },
  ),
);

export default useUserStore;
