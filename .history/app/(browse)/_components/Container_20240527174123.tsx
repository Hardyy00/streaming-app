"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  return (
    <div
      className={cn(
        "flex-1 transition",
        collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
