import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CopyButtonProps {
  value?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  return <Button variant={"ghost"}>Copy Button</Button>;
};
