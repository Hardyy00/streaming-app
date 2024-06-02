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
    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast("Followed the user");
        })
        .catch((err) => {
          toast("Something went wrong", err);
        });
    });

    // onFollow(otherUser.id);
  };
  return (
    <Button
      disabled={isFollowing || isPending}
      variant={"primary"}
      onClick={onClick}
    >
      Follow
    </Button>
  );
};
