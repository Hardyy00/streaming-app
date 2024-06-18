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
  const hint = useMemo(() => {});
  return <div>Chat Info</div>;
};
