import Image from "next/image";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  fallback,
  isLive,
  src,
}) => {
  return <Image src={fallback} alt="User Thumbnail" />;
};
