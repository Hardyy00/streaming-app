import { Stream, User } from "@prisma/client";
import Link from "next/link";

interface ResultCardProps {
  stream: Stream & { user: User };
}

export const ResultCard: React.FC<ResultCardProps> = ({ stream }) => {
  return (
    <Link href={`/${stream.user.username}`}>
      <div>{stream.name}</div>
    </Link>
  );
};
