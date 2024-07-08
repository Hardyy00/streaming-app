import { Stream, User } from "@prisma/client";
import Link from "next/link";
import { Thumbnail } from "../../(home)/_components/thumbnail";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard: React.FC<ResultsCardProps> = ({ data }) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <Thumbnail src={data.thumbnail} fallback={data.user.imageUrl} />
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
