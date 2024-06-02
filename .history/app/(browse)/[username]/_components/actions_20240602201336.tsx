"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { onFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

interface ActionsProps {
  params: {
    username: string;
  };
}

export const Actions: React.FC<ActionsProps> = ({ params }) => {
  const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const otherUser = await db.user.findUnique({
      where: {
        username: params.username,
      },
    });
    onFollow(otherUser?.id);
  };
  return (
    <Button variant={"primary"} onClick={onClick}>
      Follow
    </Button>
  );
};
