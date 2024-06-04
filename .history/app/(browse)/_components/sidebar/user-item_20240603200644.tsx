"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import UserAvatar from "@/components/user-avatar";
import LiveBadge from "@/components/live-badge";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

export const UserItem: React.FC<UserItemProps> = ({
  username,
  imageUrl,
  isLive,
}) => {
  const pathName = usePathname();

  const { collapsed, onCollapse, onExpand } = useSidebar();

  const href = `/${username}`;
  const isActive = pathName === href;

  return (
    <Button
      variant={"ghost"}
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-gray-400/10 rounded-xl"
      )}
      asChild
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <UserAvatar
            imageUrl={imageUrl}
            username={username}
            isLive={isLive ?? false}
            showBadge={collapsed}
          />

          {!collapsed && (
            <p className="truncate">
              {username[0].toUpperCase().concat(username.slice(1))}
            </p>
          )}

          {!collapsed && isLive && <LiveBadge />}
        </div>
      </Link>
    </Button>
  );
};

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />

      <div className="flex-1">
        <Skeleton className="h-6 rounded-[1.5rem]" />
      </div>
    </li>
  );
};
