import { create } from "zustand";

export type Tab = "Home" | "Portofolio" | "About" | "Contact";


interface TabStore {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: "Home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
