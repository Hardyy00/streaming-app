"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CopyButtonProps {
  value?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <Button variant={"ghost"} className={cn()}>
      Copy Button
    </Button>
  );
};
