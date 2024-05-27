"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const matches = useMediaQuery();
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
