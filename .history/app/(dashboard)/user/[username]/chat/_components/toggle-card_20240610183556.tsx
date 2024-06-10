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
  value,
}) => {
  return <div>Toggle Card</div>;
};
