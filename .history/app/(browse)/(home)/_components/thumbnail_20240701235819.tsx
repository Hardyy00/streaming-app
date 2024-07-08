import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";
import Image from "next/image";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  fallback,
  isLive,
  src,
  username,
}) => {
  let content;

  if (!src) {
    content = (
      <div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-xl">
        <UserAvatar
          size="lg"
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    );
  } else {
    content = (
      <Image
        src={src}
        alt="Thumbnail"
        fill
        className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-xl"
      />
    );
  }
  return (
    <div className="group aspect-video relative rounded-xl">
      <div className="rounded-xl absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
      {content}
      {stream.isLive && (
        <div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform ">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
