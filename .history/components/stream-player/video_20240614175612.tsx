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

  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity == hostIdentity);

  let content;

  if (!participant && connectionState === ConnectionState.Connected) {
    content = <p>Host is offline</p>;
  } else if (!participant || tracks.length == 0) {
    content = <p>Loading...</p>;
  } else {
    content = <p>Host is Live</p>;
  }
  return <div className="aspect-video border-b group relative">{content}</div>;
};

export default Video;
