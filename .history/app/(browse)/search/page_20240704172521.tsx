interface SearchPageProps {
  params: {
    term: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ params }) => {
  return <div>{params.term}</div>;
};

export default SearchPage;
