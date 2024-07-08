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
  return (
    <div className="w-full border border-red">
      <Image
        className="relative"
        src={fallback}
        alt="Thumbnail"
        width={"200"}
        height={"200"}
      />
    </div>
  );
};
