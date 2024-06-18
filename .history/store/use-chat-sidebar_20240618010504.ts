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
  onChangeVariant: (variant: ChatVariant) => void;
}

export const useChatSidebar = create<ChatSidebarStore>((set) => ({
  collapse: false,
  variant: ChatVariant.CHAT,
  onExpand: () => set(() => ({ collapse: false })),
  onCollapse: () => set(() => ({ collapse: true })),
  onChangeVariant: (variant: ChatVariant) => set(() => ({ variant })),
}));
