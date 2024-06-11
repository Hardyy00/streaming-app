import { Input } from "@/components/ui/input";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard: React.FC<KeyCardProps> = ({ value }) => {
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input value=/>
          </div>
        </div>
      </div>
    </div>
  );
};
