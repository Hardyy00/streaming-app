"use client";

import { ConnectionState, Track } from "livekit-client";
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react";
("@livekit/components-react");

interface VideoProps {
  hostIdentity: string;
  hostName: string;
}

const Video: React.FC<VideoProps> = ({ hostIdentity, hostName }) => {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);

  const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone]).filter(()=>);
  return <div className="aspect-video border-b group relative">video</div>;
};

export default Video;
