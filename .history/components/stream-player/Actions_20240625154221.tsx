"use client";

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";

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
  //    const router =  useRouter();
  const { userId } = useAuth();

  const handleFollow = () => {
    if (!userId) {
      redirect("/sign-in");
    }
  };

  return (
    <Button
      className={cn(
        "rounded-xl w-full lg:w-auto text-center",
        isFollowing && "bg-rose-600"
      )}
      onClick={() => {}}
      variant={"primary"}
      size={"sm"}
    >
      <Heart
        className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")}
      />

      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
