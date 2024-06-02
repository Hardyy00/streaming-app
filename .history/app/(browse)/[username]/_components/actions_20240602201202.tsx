"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { onFollow } from "@/actions/follow";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

export const Actions: React.FC = () => {
  const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const otherUser = await db.user.findUnique({
      where: {
        username,
      },
    });
    onFollow();
  };
  return (
    <Button variant={"primary"} onClick={onClick}>
      Follow
    </Button>
  );
};
