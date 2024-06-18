import React, { useMemo } from "react";
import { Info } from "lucide-react";
import Hint from "../hint";

interface ChatInfoProps {
  isDelayed: boolean;
  isFollowersOnly: boolean;
}

export const ChatInfo: React.FC<ChatInfoProps> = ({
  isDelayed,
  isFollowersOnly,
}) => {
  const hint = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "Only Followers can chat";
    }

    if (isDelayed && !isFollowersOnly) {
      return "Messages are delayed by 3 seconds";
    }

    if (isDelayed && isFollowersOnly) {
      return "Only followers can chat. Messages are delayed by 3 seconds";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);
  return <div>Chat Info</div>;
};
