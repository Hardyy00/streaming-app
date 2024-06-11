interface KeyCardProps {
  value: string | null;
}

export const KeyCard: React.FC<KeyCardProps> = ({ value }) => {
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-10"></div>
    </div>
  );
};
