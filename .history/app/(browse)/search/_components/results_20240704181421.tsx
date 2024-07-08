import { getSearch } from "@/lib/search-service";
import { TreePalm } from "lucide-react";

interface ResultsProps {
  term?: string;
}

export const Results: React.FC<ResultsProps> = async ({ term }) => {
  const data = await getSearch(term);
  return (
    <div>
      <h2>Results for term &quot;{term}&quot;</h2>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return <div></div>;
};
