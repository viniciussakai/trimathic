import { create } from "zustand";

interface ClassState {
  classname: string;
  activeScreen: number;
  changeClass: (name: string) => void;
  increaseScreen: (by?: number) => void;
  resetScreens: () => void;
}

export const useClassStore = create<ClassState>()((set) => ({
  classname: "",
  activeScreen: 0,
  changeClass: (name) => set((state) => ({ classname: name })),

  increaseScreen: (by = 1) =>
    set((state) => ({ activeScreen: state.activeScreen + by })),

  resetScreens: () => set(() => ({ activeScreen: 0, classname: "" })),
}));
