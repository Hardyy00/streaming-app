"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatFormProps {
  onSubmit: () => void;
  onChange: (value: string) => void;
  value: string;
  isHidden: boolean;
  isChatFollowersOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
}

export const ChatForm: React.FC<ChatFormProps> = ({
  isChatFollowersOnly,
  onChange,
  isDelayed,
  isFollowing,
  isHidden,
  onSubmit,
  value,
}) => {
  return (
    <form className="flex flex-col items-center gap-y-4" onSubmit={() => {}}>
      <div className="w-full">
        <Input
          onChange={() => {}}
          value={value}
          disabled={false}
          placeholder="Send a message"
          className={cn("border-white/10")}
        />
      </div>

      <div>
        <Button
          type="submit"
          variant={"primary"}
          size="sm"
          disabled={false}
          className="rounded-xl border border-white"
        >
          Chat
        </Button>
      </div>
    </form>
  );
};
