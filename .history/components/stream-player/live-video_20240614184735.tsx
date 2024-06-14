"use client";

import { Participant } from "livekit-client";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo: React.FC<LiveVideoProps> = ({ participant }) => {
  const videoRe;
  return (
    <div className="relative h-full flex">
      <video width={"100%"} />
    </div>
  );
};
