import { getStreams } from "@/lib/feed-service";

export const Results = async () => {
  const data = await getStreams();

  return <div>Results</div>;
};

export const ResultsSkeleton = () => {
  return <div>Skeleton</div>;
};
