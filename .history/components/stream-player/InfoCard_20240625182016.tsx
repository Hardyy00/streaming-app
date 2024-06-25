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
  return <div>Info Card</div>;
};
