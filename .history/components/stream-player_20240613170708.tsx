import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
  user: User;
  stream: Stream;
}

export const StreamPlayer: React.FC<StreamPlayerProps> = ({ user, stream }) => {
  return <div>Stream Player</div>;
};
