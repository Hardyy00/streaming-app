"use client";

import { useParticipants } from "@livekit/components-react";

interface ChatCommunityProps {
  hostName: string;
  viewerName: String;
  isHidden: boolean;
}
export const ChatCommunity: React.FC<ChatCommunityProps> = ({
  hostName,
  isHidden,
  viewerName,
}) => {
  const participants = useParticipants();

  return (
    <div>
      {participants.map((par) => {
        <div></div>;
      })}
    </div>
  );
};
