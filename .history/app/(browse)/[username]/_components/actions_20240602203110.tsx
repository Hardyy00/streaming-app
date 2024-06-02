"use client";

import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { onFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

interface ActionsProps {
  username: string;
  isFollowing: boolean;
}

export const Actions: React.FC<ActionsProps> = ({ username, isFollowing }) => {
  const [isPending, startTransition] = useTransition();
  const onClick = async () => {
    // const otherUser = await db.user.findUnique({
    //   where: {
    //     username,
    //   },
    // });

    // console.log("if : ", otherUser);
    // if (!otherUser) {
    //   throw new Error("User not found");
    // }

    startTransition(() => {
      onFollow("123");
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
