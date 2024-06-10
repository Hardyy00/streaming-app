"use client";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useTransition } from "react";

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
  const [isPending, startTransition] = useTransition();

  const onChange = async () => {};
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p>{label}</p>

        <div className="space-y-2">
          <Switch checked={value} onCheckedChange={() => {}}>
            {value ? "On" : "off"}{" "}
          </Switch>
        </div>
      </div>
    </div>
  );
};
