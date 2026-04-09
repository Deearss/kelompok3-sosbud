import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TabId } from "@/components/layout/Sidebar";

interface AppState {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  checkedItems: number[];
  toggleCheck: (index: number) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      activeTab: "tugas",
      setActiveTab: (tab) => set({ activeTab: tab }),
      
      checkedItems: [],
      toggleCheck: (index) => {
        const currentChecked = get().checkedItems;
        const newChecked = currentChecked.includes(index)
          ? currentChecked.filter((i) => i !== index)
          : [...currentChecked, index];
        set({ checkedItems: newChecked });
      },
    }),
    {
      name: "sosbud-storage", // nama key di localStorage
      storage: createJSONStorage(() => localStorage), // default localStorage
    }
  )
);
