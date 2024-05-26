"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">For You</p>

          <Button></Button>
        </div>
      )}
    </>
  );
};

export default Toggle;
