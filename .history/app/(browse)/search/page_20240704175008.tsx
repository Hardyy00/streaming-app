import { redirect } from "next/navigation";
import { Results } from "./_components/results";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  if (!searchParams) {
    return redirect("/");
  }

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense> </Suspense>
    </div>
  );
};

export default SearchPage;
