"use client";

import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing : boolean
}

export const StreamPlayer: React.FC<StreamPlayerProps> = ({ user, stream, isFollowing }) => {
  return <div>Stream Player</div>;
};
