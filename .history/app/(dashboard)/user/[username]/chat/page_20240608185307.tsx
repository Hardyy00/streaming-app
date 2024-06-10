import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/streams-service";
import React from "react";

const ChatPage: React.FC = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Chat Settings</h1>
      </div>
    </div>
  );
};

export default ChatPage;
