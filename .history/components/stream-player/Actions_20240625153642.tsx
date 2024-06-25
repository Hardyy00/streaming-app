"use client";

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionsProps {
  isFollowing: boolean;
  hostIdentity: string;
  isHost: boolean;
}

export const Actions: React.FC<ActionsProps> = ({
  hostIdentity,
  isFollowing,
  isHost,
}) => {
  const { userId } = useAuth();

  return (
    <Button
      className="rounded-xl w-full lg:w-auto"
      onClick={() => {}}
      variant={"primary"}
      size={"sm"}
    >
      <Heart className={cn("h-4 w-4 mr-2")} />
    </Button>
  );
};
