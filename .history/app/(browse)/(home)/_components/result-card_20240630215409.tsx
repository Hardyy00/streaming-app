import { Stream, User } from "@prisma/client";
import Link from "next/link";

interface ResultCardProps {
  stream: Stream & { user: User };
}

export const ResultCard: React.FC<ResultCardProps> = ({ stream }) => {
  return (
    <Link href={`/${stream.user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail src={data.} />
      </div>
    </Link>
  );
};
