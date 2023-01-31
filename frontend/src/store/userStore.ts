import { create } from "zustand";

interface authState {
  user: boolean;
  userId: string;
  token: any;
  setUser: (bool: boolean) => void;
  setToken: (value: any) => void;
  setUserId: (str: string) => void;
}

export const useAuthStore = create<authState>((set) => ({
  user: false,
  token: null,
  userId: "",
  setUser: (bool) => set({ user: bool }),
  setToken: (value) => set({ token: value }),
  setUserId: (str) => set({ userId: str }),
}));

export const authStore = create<authState>((set) => ({
  user: false,
  token: null,
  userId: "",
  setUser: (bool) => set({ user: bool }),
  setToken: (value) => set({ token: value }),
  setUserId: (str) => set({ userId: str }),
}));
