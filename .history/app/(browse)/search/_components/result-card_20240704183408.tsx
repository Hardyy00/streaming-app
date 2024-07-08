import { Stream, User } from "@prisma/client";
import Link from "next/link";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard: React.FC<ResultsCardProps> = ({ data }) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]"></div>
      </div>
    </Link>
  );
};

export default ResultCard;
