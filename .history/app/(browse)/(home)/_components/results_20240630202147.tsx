import { getStreams } from "@/lib/feed-service";

export const Results = async () => {
  const data = await getStreams();

  return (
    <div>
      <h2 className="">Some Streams you may like</h2>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return <div>Skeleton</div>;
};
