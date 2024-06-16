"use client";

interface ChatProps {
  hostIdentity: string;
  viewerName: String;
  hostName: string;
  isFollowing: boolean;
  isChatDelayed: boolean;
  isChatEnabled: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat: React.FC<ChatProps> = () => {
  return <div>Chat</div>;
};
