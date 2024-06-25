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
  const [value, setValue] = useState("");
  const participants = useParticipants();

  return (
    <div>
      {participants.map((par) => (
        <div key={par.identity}>{JSON.stringify(par)}</div>
      ))}
    </div>
  );
};
