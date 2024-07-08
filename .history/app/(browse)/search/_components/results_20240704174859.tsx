interface ResultsProps {
  term?: string;
}

export const Results: React.FC<ResultsProps> = ({ term }) => {
  return (
    <div>
      <h2>Results for term &quot;{}&quot;</h2>
    </div>
  );
};
