import { getStreamByUserId } from "@/lib/streams-service";

export const Results = () => {
  const data = await getStreamByUserId;
  return <div>Results</div>;
};

export const ResultsSkeleton = () => {
  return <div>Skeleton</div>;
};
