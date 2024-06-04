"use client";

import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { onFollow, onUnFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { toast } from "sonner";
import colors from "colors";

interface ActionsProps {
  userId: string;
  isFollowing: boolean;
}

export const Actions: React.FC<ActionsProps> = ({ userId, isFollowing }) => {
  const [isPending, startTransition] = useTransition();
  const [isBlockPending, startBlockTansition] = useTransition();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    if (!isFollowing) {
      // code to follow a user
      startTransition(() => {
        onFollow(userId)
          .then((data) => {
            toast.success(`You are now following ${data.following.username}`);
          })
          .catch((err) => {
            toast.error("Something went wrong", err);
          });
      });
    } else {
      // code to unfollow a user
      startTransition(() => {
        onUnFollow(userId)
          .then((data) => {
            toast.success(`You unfollowed ${data.following.username}`);
          })
          .catch((err) => {
            toast.error("Something went wrong", err);
          });
      });
    }
  };

  const handleBlock: React.MouseEventHandler<HTMLButtonElement> = () => {};
  return (
    <>
      <Button disabled={isPending} variant={"primary"} onClick={onClick}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button
        disabled={isBlockPending}
        variant={"primary"}
        onClick={handleBlock}
      >
        Block
      </Button>
    </>
  );
};
