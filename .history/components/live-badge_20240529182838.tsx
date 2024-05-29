import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

const LiveBadge: React.FC<LiveBadgeProps> = ({ className }) => {
  return <div className={cn("bg-rose-500 text-center", className)}>Live</div>;
};

export default LiveBadge;
