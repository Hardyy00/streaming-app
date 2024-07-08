"use client";

import { useSearchParams } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return <div>{params.get("term")}</div>;
};

export default SearchPage;
