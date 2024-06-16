"use client";

import { useChatSidebar } from "@/store/use-chat-sidebar";
import { useMediaQuery } from "usehooks-ts";

interface ChatProps {
  hostIdentity: string;
  viewerName: String;
  hostName: string;
  isFollowing: boolean;
  isChatDelayed: boolean;
  isChatEnabled: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat: React.FC<ChatProps> = ({
  hostIdentity,
  hostName,
  isChatDelayed,
  isChatEnabled,
  isChatFollowersOnly,
  isFollowing,
  viewerName,
}) => {
  const matches = useMediaQuery("(max-width: 1024px)");

  const {} = useChatSidebar();
  return <div>Chat</div>;
};
