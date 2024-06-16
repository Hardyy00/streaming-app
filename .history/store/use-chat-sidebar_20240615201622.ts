import { create } from "zustand";

export enum ChatVariant {
  CHAT = "CHAT",
  COMMUNITY = "COMMUNITY",
}

interface ChatSidebarStore {
  collapse: boolean;
  variant?: ChatVariant;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useChatSidebar = create<ChatSidebarStore>((set) => ({
  collapse: false,
  onExpand: () => set(() => ({ collapse: false })),
  onCollapse: () => set(() => ({ collapse: true })),
}));
