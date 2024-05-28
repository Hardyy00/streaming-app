"use client";

interface UserItem {
  username: string;
  imageUrl: string;
  isLive: boolean;
}

export const UserItem: React.FC<UserItem> = ({
  username,
  imageUrl,
  isLive,
}) => {
  return <div>User Item</div>;
};
