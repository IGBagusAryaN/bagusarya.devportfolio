import { create } from "zustand";

export type Tab = "Home" | "Portfolio" | "About" | "Contact" | "Others";


interface TabStore {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: "Home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
