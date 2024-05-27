"use client";

import { useSidebar } from "@/store/use-sidebar";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  return <div>{children}</div>;
};

export default Container;
