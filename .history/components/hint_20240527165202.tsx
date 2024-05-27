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
    // <TooltipProvider>
    //   <Tooltip delayDuration={0}>
    //     <TooltipTrigger asChild>{children}</TooltipTrigger>
    //     <TooltipContent
    //       className="text-black bg-white"
    //       side={side}
    //       align={align}
    //     >
    //       <p className="font-semibold">{label}</p>
    //     </TooltipContent>
    //   </Tooltip>
    // </TooltipProvider>

    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
