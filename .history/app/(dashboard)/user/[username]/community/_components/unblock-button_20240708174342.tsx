"use client";

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";
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
  return (
    <Button variant={"secondary"} className="rounded-xl">
      Unblock
    </Button>
  );
};

export default UnblockButton;
