import { Pencil } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface InfoCard {
  hostIdentity: string;
  viewerIdentity: string;
  name: string;
  thumbnailUrl: string;
}

export const InfoCard: React.FC<InfoCard> = ({
  hostIdentity,
  name,
  thumbnailUrl,
  viewerIdentity,
}) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  if (!isHost) {
    return null;
  }
  return (
    <div className="px-4 ">
      <div className="rounded-xl bg-background">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="rounded-xl bg-blue-600 p-2 h-auto w-auto">
            <Pencil className="h-5 w-5 stroke-[2px]" />
          </div>

          <div className="">
            <h2 className="text-sm lg:text-lg font-semibold capitalize">
              Edit Your stream info
            </h2>
            <p className="text-muted-foreground text-xs lg:text-sm">
              Maximize your visibility
            </p>
          </div>

          {/* TODO: add a modal button */}
        </div>

        <Separator />

        <div className="p-4 lg:p-6 space-y-4">
          <div>
            <h23 className="text-sm"></h23>
          </div>
        </div>
      </div>
    </div>
  );
};
