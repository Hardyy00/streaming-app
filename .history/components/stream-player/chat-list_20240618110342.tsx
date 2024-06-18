import { ReceivedChatMessage } from "@livekit/components-react";

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}
export const ChatList: React.FC<ChatListProps> = ({ isHidden, messages }) => {
  return <div>Chat List</div>;
};
