import { ReceivedChatMessage } from "@livekit/components-react";

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}
export const ChatList: React.FC<ChatListProps> = ({ isHidden, messages }) => {
  if (isHidden || !messages || messages.length === 0) {
    return <div className="flex flex-1 items-center justify-center"></div>;
  }
  return <div>Chat List</div>;
};
