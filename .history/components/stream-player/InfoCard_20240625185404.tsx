import { Pencil } from "lucide-react";

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
          <div>
            <Pencil />
          </div>
        </div>
      </div>
    </div>
  );
};
