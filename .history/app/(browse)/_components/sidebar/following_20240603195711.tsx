"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import { UserItem } from "./user-item";

interface FollowingProps {
  data: User[];
}

export const Following: React.FC<FollowingProps> = ({ data }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar();

  if (!data.length) {
    return null;
  }
  return (
    <div>
      {!collapsed && (
        <div className="pl-5 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}

      <ul className="space-y-2 px-2">
        {data.map((item) => (
          <UserItem
            imageUrl={item.imageUrl}
            username={item.username}
            key={item.id}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};
