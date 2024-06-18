import { ReceivedChatMessage } from "@livekit/components-react";
import React from "react";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ data }) => {
  return <div>{data.message}</div>;
};
