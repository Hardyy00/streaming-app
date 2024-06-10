"use client";

type Field = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  field: Field;
  label: string;
  value: boolean;
}
export const ToggleCard: React.FC<ToggleCardProps> = ({
  field,
  label,
  value = false,
}) => {
  return <div className="rounded-xl bg-muted p-6">Toggle Card</div>;
};
