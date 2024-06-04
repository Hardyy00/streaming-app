"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";

interface FollowingProps {
  data: User[];
}

export const Following: React.FC<FollowingProps> = ({ data }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar();

  if (!data) {
    return null;
  }
  return <div>{!collapsed && <div className="pl-5 mb-4">hii</div>}</div>;
};
