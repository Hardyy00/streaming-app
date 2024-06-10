import { Switch } from "@/components/ui/switch";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/streams-service";
import React from "react";
import { ToggleCard } from "./_components/toggle-card";

const ChatPage: React.FC = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  console.log(stream);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Chat Settings</h1>
      </div>

      <div className="space-y-4">
        <ToggleCard
          field="isChatEnabled"
          label="Enable Chat"
          value={stream.isChatEnabled}
        />

        <ToggleCard
          field="isChatEnabled"
          label="Enable Chat"
          value={stream.isChatEnabled}
        />

        <ToggleCard
          field="isChatEnabled"
          label="Enable Chat"
          value={stream.isChatEnabled}
        />
      </div>
    </div>
  );
};

export default ChatPage;
