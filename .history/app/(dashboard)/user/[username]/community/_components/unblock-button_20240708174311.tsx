"use client";

import { onUnblock } from "@/actions/block";
import React, { useTransition } from "react";
import { toast } from "sonner";

interface UnblockButtonProps {
  userId: string;
}

const UnblockButton: React.FC<UnblockButtonProps> = ({ userId }) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) =>
          toast.success(`Successfully unblocked ${data.blocked.username}`)
        )
        .catch(() => `Something went wrong`);
    });
  };
  return <div></div>;
};

export default UnblockButton;
