import { useRouter } from "next/router";

interface SearchPageProps {
  params: {
    term: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = () => {
  const router = useRouter();
  return <div>{router.query.term}</div>;
};

export default SearchPage;
