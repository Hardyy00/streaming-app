import Image from "next/image";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username:string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  fallback,
  isLive,
  src,
  username
}) => {
  return (
    <div className="w-full">
      {/* <Image className="relative" src={fallback} alt="Thumbnail" /> */}
    </div>
  );
};
