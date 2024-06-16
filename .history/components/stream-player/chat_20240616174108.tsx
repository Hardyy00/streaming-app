"use client";

interface ChatProps {
  viewerName: String;
  hostName: string;
  isFollowing: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat: React.FC = () => {
  return <div>Chat</div>;
};
