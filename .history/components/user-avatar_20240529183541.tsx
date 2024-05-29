import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LiveBadge from "./live-badge";

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
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border",
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          {/* if image is loading display first and last characters e.g HG */}
          {username[0].toUpperCase()}
          {username[username.length - 1].toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {canShowBadge && (
        // <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"></div>

        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export default UserAvatar;

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton: React.FC<UserAvatarSkeletonProps> = ({size})=>{

  return <Skeleton
};
