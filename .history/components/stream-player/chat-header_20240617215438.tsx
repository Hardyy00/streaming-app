"use client";

import { Skeleton } from "../ui/skeleton";
import { ChatToggle } from "./chat-toggle";

export const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b  ">
      <div className="absolute left-8">
        <ChatToggle />
      </div>
      <p className="font-semibold text-primary text-center">Stream Chat</p>

      {/* TODO: Chat Community */}
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className="relative p-3 border-b  hidden md:block">
      <Skeleton className="absolute h-6 w-6 left-3 top-3" />
      <Skeleton className="w-28 h-6 mx-auto" />
    </div>
  );
};
