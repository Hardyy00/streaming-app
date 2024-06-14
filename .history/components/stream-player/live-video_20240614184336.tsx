"use client";

import { Participant } from "livekit-client";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo: React.FC<LiveVideoProps> = ({ participant }) => {
  return <div>Live Video</div>;
};
