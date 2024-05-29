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
  isLive: boolean;
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
        isActive && "bg-accent"
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
            isLive={isLive}
            showBadge
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
