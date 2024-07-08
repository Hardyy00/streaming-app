import { redirect } from "next/navigation";
import { Results, ResultsSkeleton } from "./_components/results";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  if (Object.keys(searchParams).length == 0) {
    return redirect("/");
  }

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        {" "}
        <Results term={searchParams.term} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
