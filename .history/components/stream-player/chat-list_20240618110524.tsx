import { ReceivedChatMessage } from "@livekit/components-react";

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}
export const ChatList: React.FC<ChatListProps> = ({ isHidden, messages }) => {
  if (isHidden || !messages || messages.length === 0) {
    return null;
  }
  return <div>Chat List</div>;
};
