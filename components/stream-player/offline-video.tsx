import { WifiOff } from "lucide-react";

interface OfflineVideoProps {
  username: string;
}

export const OfflineVideo: React.FC<OfflineVideoProps> = ({ username }) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <WifiOff className="h-10 w-full text-muted-foreground" />
      <p className="text-muted-foreground">{username} is Offline</p>
    </div>
  );
};
