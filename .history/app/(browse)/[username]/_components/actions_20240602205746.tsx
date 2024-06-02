"use client";

import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { onFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { toast } from "sonner";

interface ActionsProps {
  userId: string;
  isFollowing: boolean;
}

export const Actions: React.FC<ActionsProps> = ({ userId, isFollowing }) => {
  const [isPending, startTransition] = useTransition();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    if (!isFollowing) {
      startTransition(() => {
        onFollow(userId)
          .then((data) => {
            toast(`You are now following ${data.following.username}`);
          })
          .catch((err) => {
            toast("Something went wrong", err);
          });
      });
    }
  };
  return (
    <Button disabled={isPending} variant={"primary"} onClick={onClick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
