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
      {data.length === 0 && (
        <p className="text-muted-foreground text-sm">
          No results found. Try searching for something else.
        </p>
      )}

      <div className="flex flex-col gap-y-4"></div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return <div></div>;
};
