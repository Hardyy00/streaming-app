import { stringToColor } from "@/lib/utils";
import { ReceivedChatMessage } from "@livekit/components-react";
import React from "react";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ data }) => {
  const color = stringToColor(data.from?.name || "");
  return <div className="flex gap-2 p-2 rounded-md">{data.message}</div>;
};
