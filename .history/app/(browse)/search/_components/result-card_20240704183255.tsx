import { Stream, User } from "@prisma/client";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard: React.FC<ResultsCardProps> = () => {
  return <div>Result card</div>;
};

export default ResultCard;
