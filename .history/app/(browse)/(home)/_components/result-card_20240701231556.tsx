import { Stream, User } from "@prisma/client";
import Link from "next/link";
import { Thumbnail } from "./thumbnail";
import LiveBadge from "@/components/live-badge";
import UserAvatar from "@/components/user-avatar";

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
          <div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform ">
            <LiveBadge />
          </div>
        )}

        <div className="flex gap-x-3 items-center">
          <UserAvatar
            username={stream.user.username}
            isLive={stream.isLive}
            imageUrl={stream.user.imageUrl}
          />

          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-blue-500">
              {stream.name}
            </p>
            <p className="text-muted-foreground">{stream.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return <div className="h-full w-full space-y-4"></div>;
};
