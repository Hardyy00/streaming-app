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

  if (!token || !name || !identity) {
    throw new E();
  }
  return <div>Stream Player</div>;
};
