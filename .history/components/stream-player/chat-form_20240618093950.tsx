"use client";

import { useState } from "react";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  isHidden: boolean;
  isChatFollowersOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
}

export const ChatForm = () => {
  return <div>Chat Form</div>;
};
