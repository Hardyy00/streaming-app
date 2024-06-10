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

export const Navigation = () => {
  const path = usePathname();

  const { user } = useUser();

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

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <div key={route.href}>{route.label}</div>
      ))}
    </ul>
  );
};
