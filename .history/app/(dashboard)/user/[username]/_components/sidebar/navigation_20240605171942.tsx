"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";

export const Navigation = () => {
  const path = usePathname();

  const { use } = useUser;
  return <div>Navigation</div>;
};
