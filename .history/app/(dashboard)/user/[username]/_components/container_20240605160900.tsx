"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const isSmall = useMediaQuery("(max-width:1024px)"); // return true->if we are on the small screen

  const { collapsed, onCollapse, onExpand } = useCreatorSidebar();

  useEffect(() => {
    if (isSmall) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [isSmall, onExpand, onCollapse]);

  return (
    <div className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-60")}>
      {children}
    </div>
  );
};
