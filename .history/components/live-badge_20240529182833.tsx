import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

const LiveBadge: React.FC<LiveBadgeProps> = ({ className }) => {
  return <div className={cn("bg-rose-500", className)}>Live</div>;
};

export default LiveBadge;
