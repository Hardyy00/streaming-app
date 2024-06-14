"use client";

import { Participant } from "livekit-client";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo: React.FC<LiveVideoProps> = () => {
  return <div>Live Video</div>;
};
