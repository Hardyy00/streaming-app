import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

const LiveBadge: React.FC<LiveBadgeProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5 px-1.5 rounded-lg uppercase text-[10px] border border-background font-semibold tracking-wide",
        className
      )}
    >
      Live
    </div>
  );
};

export default LiveBadge;
