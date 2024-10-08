"use client";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed left-0 w-60  flex flex-col h-full bg-background border-r border-[#2D2E34] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
