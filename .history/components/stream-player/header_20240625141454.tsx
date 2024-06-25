"use client";

interface HeaderProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
  imageUrl: string;
  name: string;
}

export const Header: React.FC<HeaderProps> = ({
  hostIdentity,
  hostName,
  isFollowing,
  name,
  viewerIdentity,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between">
      <div className="fle"></div>
    </div>
  );
};
