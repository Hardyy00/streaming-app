import { Stream, User } from "@prisma/client";
import Link from "next/link";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard: React.FC<ResultsCardProps> = ({ data }) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4"></div>
    </Link>
  );
};

export default ResultCard;
