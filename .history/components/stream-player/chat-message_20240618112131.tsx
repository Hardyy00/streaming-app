import { stringToColor } from "@/lib/utils";
import { ReceivedChatMessage } from "@livekit/components-react";
import { format } from "date-fns";
import React from "react";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ data }) => {
  const color = stringToColor(data.from?.name || "");
  return (
    <div className="flex gap-2 p-2 rounded-xl hover:bg-white/5">
      <p className="text-sm text-white/40"></p>
      {data.message}
    </div>
  );
};
