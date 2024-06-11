interface KeyCardProps {
  value: string | null;
}

export const KeyCard: React.FC<KeyCardProps> = ({ value }) => {
  return <div className="rounded-xl bg-muted p-6">Key Card</div>;
};
