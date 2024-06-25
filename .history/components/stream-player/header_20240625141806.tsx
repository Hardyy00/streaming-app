"use client";

import UserAvatar from "@/components/user-avatar";

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
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={true}
          showBadge
        />
      </div>
    </div>
  );
};
