import { redirect } from "next/navigation";

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
      <Results />
    </div>
  );
};

export default SearchPage;
