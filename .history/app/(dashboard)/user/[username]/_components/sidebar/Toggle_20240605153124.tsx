"use client";

import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
    (state) => state
  );

  const label = collapsed ? "Expand" : "Collapse";

  return <>{collapsed && <div className="w-full hid"></div>}</>;
};
