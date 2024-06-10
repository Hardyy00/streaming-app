"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  isActive,
  icon: Icon,
}) => {
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <Button
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-gray-500/20 rounded-[1rem]"
      )}
      variant={"ghost"}
      asChild
    >
      <Link href={href}>
        <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />

        {!collapsed && <span>{label}</span>}
      </Link>
    </Button>
  );
};

export const NavItemSkeleton = () => {
  retur;
};
