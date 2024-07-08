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
  return <div>{params.get("term")}</div>;
};

export default SearchPage;
