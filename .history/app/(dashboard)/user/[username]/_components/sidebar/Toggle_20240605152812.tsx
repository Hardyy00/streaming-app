"use client";

import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar();
};
