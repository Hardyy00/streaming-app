"use client";

interface HeaderProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
  name: string
}

export const Header: React.FC<HeaderProps> = ({hostIdentity,hostName,isFollowing,name,viewerIdentity}) => {
  return <div>Header</div>;
};
