import { getStreams } from "@/lib/feed-service";
import { Stream } from "@prisma/client";

export const Results = async () => {
  const data : Stream[] = await getStreams();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Some Streams you may like</h2>

      {data.}
    </div>
  );
};

export const ResultsSkeleton = () => {
  return <div>Skeleton</div>;
};
