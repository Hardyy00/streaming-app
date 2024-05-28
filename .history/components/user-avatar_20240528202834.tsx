import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const avatarSizes = cva("", { variants :{
  size : {
    default : "h-8 w-8",
    lg:
  }
} })

interface UserAvatarProps {
  username: string;
  isLive: boolean;
  imageUrl: string;
  showBadge?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  username,
  isLive,
  imageUrl,
  showBadge
}) => {
  return <div>Hii</div>;
};

export default UserAvatar;
