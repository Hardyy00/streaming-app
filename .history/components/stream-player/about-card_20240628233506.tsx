"use client";

import { Button } from "../ui/button";
import { VerifiedMark } from "../verified";

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

  const followedByLabel = followedByCount === 1 ? "follower" : "followers";

  return (
    <div className="px-4">
      <div className="group rounded-xl bg-background p-6 lg:p-10 flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-lg">
            About {hostName} <VerifiedMark />{" "}
          </div>

          {isHost && (
            <Button className="" variant={"link"}>
              Edit
            </Button>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{followedByCount}</span>
          <span>{followedByLabel}</span>
        </div>

        <p className="text-sm">{bio || "No Bio for this Streamer"}</p>
      </div>{" "}
    </div>
  );
};
