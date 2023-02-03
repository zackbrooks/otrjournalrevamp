import { create } from "zustand";
import { persist } from "zustand/middleware";

interface authState {
  user: any;
  userId: string;
  token: any;
  setUser: (bool: boolean) => void;
  setToken: (value: any) => void;
  setUserId: (str: string) => void;
  logout: () => void;
}

// export const useAuthStore = create<authState>((set) => ({
//   user: false,
//   token: null,
//   userId: "",
//   setUser: (bool) => set({ user: bool }),
//   setToken: (value) => set({ token: value }),
//   setUserId: (str) => set({ userId: str }),
//   logout: () => {
//     set({ user: null });
//     set({ token: null });
//   },
// }));

export const useAuthStore = create<authState>()(
  persist(
    (set) => ({
      user: false,
      token: null,
      userId: "",
      setUser: (bool) => set({ user: bool }),
      setToken: (value) => set({ token: value }),
      setUserId: (str) => set({ userId: str }),
      logout: () => {
        set({ user: null });
        set({ token: null });
      },
    }),
    { name: "global", getStorage: () => localStorage }
  )
);
// export const useAuthStore = create<authState>((set) => ({
//   user: false,
//   token: null,
//   userId: "",
//   setUser: (bool) => set({ user: bool }),
//   setToken: (value) => set({ token: value }),
//   setUserId: (str) => set({ userId: str }),
//   logout: () => {
//     set({ user: null });
//     set({ token: null });
//   },
// }));

export const addUserLocalStorage = (user: any, token: any) => {
  localStorage.setItem("user", user);
  // localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const removeUserLocalStorage = (user: any, token: any) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
