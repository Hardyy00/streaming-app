import { ReceivedChatMessage } from "@livekit/components-react";

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}
export const ChatList: React.FC<ChatListProps> = ({ isHidden, messages }) => {
  if (isHidden || !messages || messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center border border-white">
        <p className="text-sm text-muted-foreground">
          {isHidden ? "Chat is Disabled" : "Welcome to the chat!"}
        </p>
      </div>
    );
  }
  return <div>Chat List</div>;
};
