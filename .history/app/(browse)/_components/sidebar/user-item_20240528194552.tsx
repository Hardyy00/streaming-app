"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

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
      User Item
    </Button>
  );
};
