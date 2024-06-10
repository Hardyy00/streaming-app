"use client";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[70px]  lg:w-60  h-full bg-background border-r border-[#2D2E34] z-50l transition-al",
        collapsed && "lg:w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
