"use client";

import { ConnectionState } from "livekit-client";

interface VideoProps {
  hostIdentity: string;
  hostName: string;
}

const Video: React.FC<VideoProps> = ({ hostIdentity, hostName }) => {
  return <div className="aspect-video border-b group relative">video</div>;
};

export default Video;
