import { Stream, User } from "@prisma/client";

interface ResultsCardProps {
  data: Stream & { user: User };
}
const ResultCard = () => {
  return <div>Result card</div>;
};

export default ResultCard;
