"use client";

import { useSidebar } from "@/store/use-sidebar";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full"></div>
      )}
    </>
  );
};

export default Toggle;
