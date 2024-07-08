import { getStreams } from "@/lib/feed-service";
import { Stream, User } from "@prisma/client";
import { ResultCard } from "./result-card";
import { Skeleton } from "@/components/ui/skeleton";

type StreamWithUser = Stream & { user: User };

export const Results = async () => {
  const data: StreamWithUser[] = await getStreams();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Some Streams you may like</h2>

      {data.length == 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((stream) => (
          <ResultCard key={stream.id} stream={stream} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((stream) => (
          <ResultCard key={stream.id} stream={stream} />
        ))}
      </div>
    </div>
  );
};
