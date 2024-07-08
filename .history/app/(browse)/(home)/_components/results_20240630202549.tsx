import { getStreams } from "@/lib/feed-service";
import { Stream, User } from "@prisma/client";

type StreamWithUser = (Stream & { user: User })[];

export const Results = async () => {
  const data: StreamWithUser[] = await getStreams();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Some Streams you may like</h2>

      {data.length == 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}
    </div>
  );
};

export const ResultsSkeleton = () => {
  return <div>Skeleton</div>;
};
