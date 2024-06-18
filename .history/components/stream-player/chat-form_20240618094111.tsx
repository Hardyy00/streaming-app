"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  isHidden: boolean;
  isChatFollowersOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
}

export const ChatForm: React.FC<ChatFormProps> = ({
  isChatFollowersOnly,
  isDelayed,
  isFollowing,
  isHidden,
  onSubmit,
  value,
}) => {
  return <div>Chat Form</div>;
};
