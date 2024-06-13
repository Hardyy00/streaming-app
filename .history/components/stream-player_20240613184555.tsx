"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";

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

  console.log(identity);

  if (!token || !name || !identity) {
    return <div>Cannot watch the stream</div>;
  }
  return <div>Allowed to watch the stream</div>;
};
