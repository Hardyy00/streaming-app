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
      <div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-1 rounded-xl">
        <UserAvatar />
      </div>
    );
  }
  return (
    <div className="group aspect-video relative rounded-xl">
      <div className="rounded-xl absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        {content}
      </div>

      {/* <Image className="relative" src={fallback} alt="Thumbnail" /> */}
    </div>
  );
};
