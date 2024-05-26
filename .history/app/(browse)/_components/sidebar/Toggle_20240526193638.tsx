"use client";

import { useSidebar } from "@/store/use-sidebar";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";
  return <>{!collapsed && <div className="p-3"></div>}</>;
};

export default Toggle;
