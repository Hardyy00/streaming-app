import { Stream, User } from "@prisma/client";
import Link from "next/link";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard: React.FC<ResultsCardProps> = ({ data }) => {
  return <Link href={`/${data.user.username}`}></Link>;
};

export default ResultCard;
