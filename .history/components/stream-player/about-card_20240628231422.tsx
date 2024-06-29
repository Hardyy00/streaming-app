"use client";

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  bio,
  followedByCount,
  hostIdentity,
  hostName,
  viewerIdentity,
}) => {
  const hostAsViewer = `host-${hostIdentity}`;

  const isHost = viewerIdentity === hostAsViewer;
  return <div>About card</div>;
};
