import { Stream, User } from "@prisma/client";
import Link from "next/link";
import { Thumbnail } from "./thumbnail";

interface ResultCardProps {
  stream: Stream & { user: User };
}

export const ResultCard: React.FC<ResultCardProps> = ({ stream }) => {
  return (
    <Link href={`/${stream.user.username}`}>
      <div className="h-full w-full space-y-4 border border-white">
        <Thumbnail
          src={stream.thumbnail}
          fallback={stream.user.imageUrl}
          isLive={stream.isLive}
          username={stream.user.username}
        />
      </div>
    </Link>
  );
};
