"use client";

import { Button } from "../ui/button";

interface ActionsProps {
  isFollowing: boolean;
  hostIdentity: string;
  isHost: boolean;
}

export const Actions: React.FC<ActionsProps> = ({
  hostIdentity,
  isFollowing,
  isHost,
}) => {
  return (
    <Button
      className="rounded-xl"
      onClick={() => {}}
      variant={"primary"}
      size={"sm"}
    >
      Actions
    </Button>
  );
};
