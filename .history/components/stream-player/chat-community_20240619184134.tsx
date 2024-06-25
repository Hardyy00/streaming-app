"use client";

import { useParticipants } from "@livekit/components-react";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";

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
  const debouncedValue = useDebounceValue<string>(value, 500);

  const participants = useParticipants();

  return (
    <div>
      {participants.map((par) => (
        <div key={par.identity}>{JSON.stringify(par)}</div>
      ))}
    </div>
  );
};
