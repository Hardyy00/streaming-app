interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string;
  followedByCount: number;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  bio,
  followedByCount,
  hostIdentity,
  hostName,
  viewerIdentity,
}) => {
  return <div>About card</div>;
};
