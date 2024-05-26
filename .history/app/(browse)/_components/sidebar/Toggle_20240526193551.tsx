"use client";

import { useSidebar } from "@/store/use-sidebar";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? ""
  return <div>Toggle</div>;
};

export default Toggle;
