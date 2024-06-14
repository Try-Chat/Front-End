import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  id: string | number | null;
  userId: string | null;
  setUserId: ({ id, userId }: { id: string | number; userId: string }) => void;
}

const useUserStore = create<StoreState>()(
  persist(
    (set) => ({
      id: null,
      userId: null,
      setUserId: ({ id, userId }) => set({ id, userId }),
    }),
    {
      name: 'myInfo',
      getStorage: () => sessionStorage,
    },
  ),
);

export default useUserStore;
