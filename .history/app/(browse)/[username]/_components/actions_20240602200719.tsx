"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { onFollow } from "@/actions/follow";

export const Actions: React.FC = () => {
  const onClick = () => {
    onFollow(123);
  };
  return <Button variant={"primary"}>Follow</Button>;
};
