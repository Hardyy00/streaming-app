"use client";

import UserAvatar from "@/components/user-avatar";
import { VerifiedMark } from "@/components/verified";
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react";

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
  const participants = useParticipants();
  const participant = useRemoteParticipant(hostIdentity);

  const isLive = !!participant;
  const participantCount = participants.length - 1; // do not count the host himself

  const hostAsViewer = `host-${hostIdentity}`;

  const isHost = viewerIdentity === hostAsViewer;
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={true}
          showBadge
        />

        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg font-semibold">{hostName}</h2>
            <VerifiedMark />
          </div>

          <p></p>
        </div>
      </div>
    </div>
  );
};
