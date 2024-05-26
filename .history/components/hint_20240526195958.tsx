import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface HintProps {
  label: String;
  children: React.ReactNode;
  asChild?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

const Hint: React.FC<HintProps> = ({
  label,
  children,
  asChild,
  side,
  align,
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}></Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
