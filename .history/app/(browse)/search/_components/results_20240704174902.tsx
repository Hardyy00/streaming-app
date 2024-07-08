interface ResultsProps {
  term?: string;
}

export const Results: React.FC<ResultsProps> = ({ term }) => {
  return (
    <div>
      <h2>Results for term &quot;{term}&quot;</h2>
    </div>
  );
};
