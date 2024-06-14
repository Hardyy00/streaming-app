"use client";

import { Participant, Track } from "livekit-client";
import { ElementRef, useRef } from "react";
import { useTracks } from "@livekit/components-react";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo: React.FC<LiveVideoProps> = ({ participant }) => {
  const videoRef = useRef<ElementRef<"video">>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant.identity)
    .forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });

  return (
    <div className="relative h-full flex" ref={wrapperRef}>
      <video width={"100%"} ref={videoRef} />
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all"></div>
    </div>
  );
};
