"use client";

import { usePathname } from "next/navigation";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive: boolean;
}

export const UserItem: React.FC<UserItemProps> = ({
  username,
  imageUrl,
  isLive,
}) => {
  return <div>User Item</div>;
};
