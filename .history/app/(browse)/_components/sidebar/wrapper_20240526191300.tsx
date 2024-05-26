"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar();
  return (
    <aside
      className={cn(
        `fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35]`
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
