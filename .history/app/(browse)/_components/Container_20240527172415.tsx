"use client";

import { useSidebar } from "@/store/use-sidebar";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar();
  return <div>{children}</div>;
};

export default Container;
