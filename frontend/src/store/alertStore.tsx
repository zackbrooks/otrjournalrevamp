import { create } from "zustand";
interface alertState {
  alertStatus: boolean;
  alertPage: string;
  alertText: string;
  alertType: string;
  setAlert: (status: boolean, page: string, text: string, type: string) => void;
  resetAlert: () => void;
}

export const alertStore = create<alertState>((set) => ({
  alertStatus: false,
  alertPage: "",
  alertText: "",
  alertType: "",
  setAlert: (status, page, text, type) =>
    set({
      alertStatus: status,
      alertPage: page,
      alertText: text,
      alertType: type,
    }),

  resetAlert: () => {
    setTimeout(() => {
      set({ alertStatus: false, alertPage: "", alertText: "", alertType: "" });
    }, 3000);
  },
}));
