"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer: React.FC<StreamPlayerProps> = ({
  user,
  stream,
  isFollowing,
}) => {
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !name || !identity) {
    return <div>Cannot watch the stream</div>;
  }
  return (
    <>
      <LiveKitRoom token={token} serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_}>
        Stream
      </LiveKitRoom>
    </>
  );
};
