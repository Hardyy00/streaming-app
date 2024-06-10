"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  Fullscreen,
  KeyRound,
  MessageSquare,
  Users,
  icons,
} from "lucide-react";
import { NavItem, NavItemSkeleton } from "./nav-item";

export const Navigation = () => {
  const path = usePathname();

  const { user, isLoaded } = useUser();

  const routes = [
    { label: "Stream", href: `/user/${user?.username}`, icon: Fullscreen },

    { label: "Keys", href: `/user/${user?.username}/keys`, icon: KeyRound },

    {
      label: "Chat",
      href: `/user/${user?.username}/chat`,
      icon: MessageSquare,
    },

    {
      label: "Community",
      href: `/user/${user?.username}/community`,
      icon: Users,
    },
  ];

  if (!user || !user.username) {
    return <ul>{[...Array(4).map((_, i) => <NavItemSkeleton key={i} />)]}</ul>;
  }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem key={route.href} {...route} isActive={path === route.href} />
      ))}
    </ul>
  );
};
