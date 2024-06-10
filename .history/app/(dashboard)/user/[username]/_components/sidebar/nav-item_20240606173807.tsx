"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { LucideIcon } from "lucide-react";

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
  icon,
}) => {
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <Button className={cn("w-full h-12")} variant={"ghost"} asChild></Button>
  );
};
