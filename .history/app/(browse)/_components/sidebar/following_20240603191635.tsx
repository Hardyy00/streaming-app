"use client";

import { User } from "@prisma/client";

interface FollowingProps {
  data: User[];
}

export const Following: React.FC<FollowingProps> = ({ data }) => {
  return <div>Following</div>;
};
