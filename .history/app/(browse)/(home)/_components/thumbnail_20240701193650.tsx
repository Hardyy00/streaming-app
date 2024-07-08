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
  return (
    <div className="group aspect-video relative rounded-xl">
      <div className="rounded-xl absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        {content}
      </div>

      {/* <Image className="relative" src={fallback} alt="Thumbnail" /> */}
    </div>
  );
};
