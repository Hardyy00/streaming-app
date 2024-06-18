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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!value || isDisabled) {
      return;
    }

    if (isDelayed && !isDelayedBlocked) {
      setIsDelayedBlocked(true);

      setTimeout(() => {
        setIsDelayedBlocked(false);
      }, 3000); // unblock after 3 sec
    } else {
      const obj = Object.fromEntries(new FormData(e.target as HTMLFormElement));
      onSubmit();
    }
  };

  if (isHidden) {
    return null;
  }
  return (
    <form
      className="flex flex-col items-center gap-y-4 p-3"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <Input
          onChange={(e) => onChange(e?.target.value)}
          value={value}
          disabled={isDisabled}
          placeholder="Send a message"
          className={cn(
            "border-white/10 rounded-xl",
            isChatFollowersOnly && "rounded-t-none border-t-0"
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

export const ChatFormSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-3">
      <Skeleton className="w-full h-10" />
      <div className="flex items-center gap-x-2 ml-auto">
        <Skeleton className="h-7 w-7" />
        <Skeleton className="h-7 w-12" />
      </div>
    </div>
  );
};
