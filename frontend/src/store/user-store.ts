import { create } from "zustand";
import type { TUser } from "../config/types";

type TAuthStore = {
  user: TUser | null;
  setUser: (user: TUser) => void;
};

export const useAuthStore = create<TAuthStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
