import { WifiOff } from "lucide-react";

interface LoadingVideoProps {
  label: string;
}

export const LoadingVideo: React.FC<LoadingVideoProps> = ({ label }) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <WifiOff className="h-10 w-full text-muted-foreground" />
      <p className="text-muted-foreground"> is Offline</p>
    </div>
  );
};
