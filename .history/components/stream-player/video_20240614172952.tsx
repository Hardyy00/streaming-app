"use client";

interface VideoProps {
  hostIdentity: string;
  hostName: string;
}

const Video: React.FC<VideoProps> = ({ hostIdentity, hostName }) => {
  return <div className="aspect-video border-b group relative"></div>;
};

export default Video;
