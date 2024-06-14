"use client";

import { Participant } from "livekit-client";
import { ElementRef, useRef } from "react";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo: React.FC<LiveVideoProps> = ({ participant }) => {
  const videoRef = useRef<ElementRef<"video">>();
  return (
    <div className="relative h-full flex">
      <video width={"100%"} />
    </div>
  );
};
