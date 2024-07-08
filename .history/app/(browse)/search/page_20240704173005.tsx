"use client";

import { useSearchParams } from "next/navigation";

interface SearchPageProps {
  
    searchParams : {
        term?:
    }
}

const SearchPage: React.FC<SearchPageProps> = () => {
  const params = useSearchParams();

  return <div>{params.get("term")}</div>;
};

export default SearchPage;
