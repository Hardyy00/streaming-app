import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";

interface UrlCardProps {
  value: string | null;
}

export const UrlCard: React.FC<UrlCardProps> = ({ value }) => {
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">Server URL</p>

        <div className="space-y-3 w-full ">
          <div className="w-full flex items-center gap-x-2">
            <Input value={value || ""} disabled placeholder="Sever URL" />

            <CopyButton value={"hardik"} />
          </div>
        </div>
      </div>
    </div>
  );
};
