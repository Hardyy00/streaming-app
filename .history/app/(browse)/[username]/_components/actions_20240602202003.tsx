"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { onFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

interface ActionsProps {
  username: string;
}

export const Actions: React.FC<ActionsProps> = ({ username }) => {
  const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const otherUser = await db.user.findUnique({
      where: {
        username,
      },
    });

    console.log(otherUser);
    if (!otherUser) {
      throw new Error("User not found");
    }

    onFollow(otherUser.id);
  };
  return (
    <Button variant={"primary"} onClick={onClick}>
      Follow
    </Button>
  );
};
