"use client";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useCreatorSidebar();
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col h-full bg-background border-r border-[#2D2E34] w-[70px] lg:w-60 z-50 transition-all",
        collapsed && "w-[70px]",
        !collapsed && "w-60"
      )}
    >
      {children}
    </aside>
  );
};
