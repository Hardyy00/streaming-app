"use client";

import { ConnectionState, Track } from "livekit-client";
import { useConnectionState, useRemo } from "@livekit/components-react";
("@livekit/components-react");

interface VideoProps {
  hostIdentity: string;
  hostName: string;
}

const Video: React.FC<VideoProps> = ({ hostIdentity, hostName }) => {
  return <div className="aspect-video border-b group relative">video</div>;
};

export default Video;
