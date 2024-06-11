interface UrlCardProps {
  value: string;
}

export const UrlCard: React.FC<UrlCardProps> = ({ value }) => {
  return <div className="rounded-xl bg-muted p-6">Url Card</div>;
};
