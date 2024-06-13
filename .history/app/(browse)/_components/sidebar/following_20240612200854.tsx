"use client";

import { useSidebar } from "@/store/use-sidebar";
import { Stream, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";

interface FollowingProps {
  data: (User & {
    stream: Stream | null;
  })[];
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
            isLive={item.stream?.isLive ?? false}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton: React.FC = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(3).map((_, i) => <UserItemSkeleton key={i} />)]}
    </ul>
  );
};
