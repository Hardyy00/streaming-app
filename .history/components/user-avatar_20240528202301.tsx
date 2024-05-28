import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  username: string;
  isLive: boolean;
  imageUrl: string;
}

const;

const UserAvatar: React.FC<UserAvatarProps> = ({
  username,
  isLive,
  imageUrl,
}) => {
  return <div>Hii</div>;
};

export default UserAvatar;
