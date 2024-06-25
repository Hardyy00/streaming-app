"use client";

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { onFollow, onUnFollow } from "@/actions/follow";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
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
  const [isPending, startTransition] = useTransition();
  //    const router =  useRouter();
  const { userId } = useAuth();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch((err) => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnFollow(hostIdentity)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch((err) => toast.error("Something went wrong"));
    });
  };
  const toggleFollow = () => {
    if (!userId) {
      return redirect("/sign-in");
    }

    if (isHost) return;

    if (isFollowing) {
      handleFollow();
    } else {
      // follow
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
