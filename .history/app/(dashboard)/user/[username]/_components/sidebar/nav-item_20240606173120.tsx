"use client";

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
  const { collapsed } = useCreatorSidebar(() => state);
  return <div>{label}</div>;
};
