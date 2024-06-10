"use client";

import { Switch } from "@/components/ui/switch";

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
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p>{label}</p>

        <div className="space-y-2">
          <Switch> {value ? "On" : "off"} </Switch>
        </div>
      </div>
    </div>
  );
};
