"use client";

import { useParticipants } from "@livekit/components-react";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { CommunityItem } from "./community-item";

interface ChatCommunityProps {
  hostName: string;
  viewerName: string;
  isHidden: boolean;
}
export const ChatCommunity: React.FC<ChatCommunityProps> = ({
  hostName,
  isHidden,
  viewerName,
}) => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebounce] = useDebounceValue<string>(value, 500);

  const participants = useParticipants();

  const onChange = (value: string) => {
    setValue(value);
  };

  if (isHidden) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>Community is Disable</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Community"
        className="border-white/10"
      />

      <ScrollArea className="gap-y-2 mt-4 h-full">
        <div className="w-full">
          <p className="text-center text-sm text-muted-foreground hidden last:block p-2">
            NO Results
          </p>

          {participants.map((participant) => (
            <CommunityItem
              key={participant.identity}
              hostName={hostName}
              viewerName={viewerName}
              participantName={participant.name!}
              participantIdentity={participant.identity}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
