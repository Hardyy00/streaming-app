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
  return <div className="flex flex-col-1 f">Header</div>;
};
