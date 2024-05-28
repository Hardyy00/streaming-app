import { cva, type VariantProps } from "class-variance-authority";

interface UserAvatarProps {
  username: string;
  isLive: boolean;
  imageUrl: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  username,
  isLive,
  imageUrl,
}) => {
  return <div>Hii</div>;
};

export default UserAvatar;
