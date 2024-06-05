"use client";

import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
    (state) => state
  );

  const label = collapsed ? "Expand" : "Collapse";

  return <div></div>;
};
