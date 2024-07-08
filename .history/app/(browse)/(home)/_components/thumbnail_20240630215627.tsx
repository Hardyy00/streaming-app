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
  return <div>Thumbnail</div>;
};
