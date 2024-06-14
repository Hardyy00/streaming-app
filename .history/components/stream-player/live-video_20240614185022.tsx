"use client";

import { Participant } from "livekit-client";
import { ElementRef, useRef } from "react";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo: React.FC<LiveVideoProps> = ({ participant }) => {
  const videoRef = useRef<ElementRef<"video">>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const;
  return (
    <div className="relative h-full flex" ref={wrapperRef}>
      <video width={"100%"} ref={videoRef} />
    </div>
  );
};
