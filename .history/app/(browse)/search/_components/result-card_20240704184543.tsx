import { Stream, User } from "@prisma/client";
import Link from "next/link";
import { Thumbnail } from "../../(home)/_components/thumbnail";
import { VerifiedMark } from "@/components/verified";
import { formatDistanceToNow } from "date-fns";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard: React.FC<ResultsCardProps> = ({ data }) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <Thumbnail
            src={data.thumbnail}
            fallback={data.user.imageUrl}
            isLive={data.isLive}
            username={data.user.username}
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold text-lg cursor-pointer hover:text-blue-500">
              {data.user.username}
            </p>

            <VerifiedMark />
          </div>

          <p className="text-sm text-muted-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(data.updatedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
