"use client";

import { useSidebar } from "@/store/use-sidebar";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar();
  return <div>Toggle</div>;
};

export default Toggle;
