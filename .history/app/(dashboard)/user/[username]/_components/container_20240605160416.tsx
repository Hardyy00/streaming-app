"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const isSmall = useMediaQuery("(max-width:1024px)");

  const { collapsed, onCollapse, onExpand } = useCreatorSidebar();

  useEffect(() => {
    if (isSmall) {
      onExpand();
    } else {
      onCollapse();
    }
  }, [isSmall, onExpand, onCollapse]);

  return (
    <div className={cn("w-full h-full ml-[70px]", !collapsed && "w-60")}></div>
  );
};
