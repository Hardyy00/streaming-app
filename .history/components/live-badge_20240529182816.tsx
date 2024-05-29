import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

const LiveBadge: React.FC<LiveBadgeProps> = ({ className }) => {
  return <div className={cn("", className)}>Live ste</div>;
};

export default LiveBadge;
