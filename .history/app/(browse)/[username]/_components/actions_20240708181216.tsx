"use client";

import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { onFollow, onUnFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { toast } from "sonner";
import colors from "colors";
import { onBlock, onUnblock } from "@/actions/block";

interface ActionsProps {
  userId: string;
  isFollowing: boolean;
  isBlocking: boolean;
}

export const Actions: React.FC<ActionsProps> = ({
  userId,
  isFollowing,
  isBlocking,
}) => {
  const [isPending, startTransition] = useTransition();
  const [isBlockPending, startBlockTransition] = useTransition();
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

  const handleBlock: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isBlocking) {
      startBlockTransition(() =>
        onUnblock(userId)
          .then((data) => {
            toast.success(`You unblocked ${data.blocked.username}`);
          })
          .catch((err) => {
            toast.error((err as Error).message);
          })
      );
    } else {
      startBlockTransition(() =>
        onBlock(userId).then((data) => {
          toast.success(
            data
              ? `You blocked ${data.blocked.username}`
              : "You successfully kicked the guest"
          );
        })
      );
    }
  };
  return (
    <>
      <Button disabled={isPending} variant={"primary"} onClick={onClick}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button disabled={isBlockPending} onClick={handleBlock}>
        {isBlocking ? "Unblock" : "Block"}
      </Button>
    </>
  );
};
