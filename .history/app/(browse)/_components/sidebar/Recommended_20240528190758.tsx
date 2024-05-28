"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import React from "react";
import { UserItem } from "./user-item";
import { Skeleton } from "@/components/ui/skeleton";

interface RecommendedProps {
  data: User[];
}

export const Recommended: React.FC<RecommendedProps> = ({ data }) => {
  const { collapsed } = useSidebar((state) => state);

  cosnt pathname

  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted">Recommended</p>
        </div>
      )}

      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={false}
          />
        ))}
      </ul>
    </div>
  );
};
