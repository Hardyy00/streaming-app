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
  const [isDelayedBlocked, setIsDelayedBlocked] = useState(false);

  const isFollowersOnlyAndNotFollowing = isChatFollowersOnly && !isFollowing;

  const isDisabled =
    isHidden || isDelayedBlocked || isFollowersOnlyAndNotFollowing;
  return (
    <form
      className="flex flex-col items-center gap-y-4 p-3"
      onSubmit={() => {}}
    >
      <div className="w-full">
        <Input
          onChange={() => {}}
          value={value}
          disabled={isDisabled}
          placeholder="Send a message"
          className={cn(
            "border-white/10 rounded-xl",
            isFollowersOnlyAndNotFollowing && "rounded-t-none"
          )}
        />
      </div>

      <div className="ml-auto">
        <Button
          type="submit"
          variant={"primary"}
          size="sm"
          disabled={isDisabled}
          className="rounded-xl"
        >
          Chat
        </Button>
      </div>
    </form>
  );
};
