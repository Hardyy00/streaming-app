import { Stream, User } from "@prisma/client";
import Link from "next/link";
import { Thumbnail } from "./thumbnail";
import LiveBadge from "@/components/live-badge";

interface ResultCardProps {
  stream: Stream & { user: User };
}

export const ResultCard: React.FC<ResultCardProps> = ({ stream }) => {
  return (
    <Link href={`/${stream.user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={stream.thumbnail}
          fallback={stream.user.imageUrl}
          isLive={stream.isLive}
          username={stream.user.username}
        />

        {stream.isLive && (
          <div className="absolute ">
            <LiveBadge />
          </div>
        )}
      </div>
    </Link>
  );
};
