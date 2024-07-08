import { useSearchParams } from "next/navigation";

interface SearchPageProps {
  params: {
    term: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = () => {
  const params = useSearchParams();

  return <div>{params.}</div>;
};

export default SearchPage;
