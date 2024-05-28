import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  isLive: boolean;
  imageUrl: string;
  showBadge?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  username,
  isLive,
  imageUrl,
  showBadge,
  size,
}) => {
  const canShowBadge = showBadge && isLive;
  return (
    <div className="relative">
      <AvatarImage src={imageUrl} className="object-cover" />
    </div>
  );
};

export default UserAvatar;
