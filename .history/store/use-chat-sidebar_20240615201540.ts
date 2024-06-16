import { create } from "zustand";

export e

interface ChatSidebarStore {
  collapse: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useChatSidebar = create<ChatSidebarStore>((set) => ({
  collapse: false,
  onExpand: () => set(() => ({ collapse: false })),
  onCollapse: () => set(() => ({ collapse: true })),
}));
