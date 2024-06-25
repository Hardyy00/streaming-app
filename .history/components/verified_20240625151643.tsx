import { Check } from "lucide-react";

export const VerifiedMark = () => {
  return (
    <div className="bg-blue-600 p-0.5 rounded-full flex items-center justify-center h-4 w-4">
      <Check className="h-[10px] w-[10px] text-primary" />
    </div>
  );
};
