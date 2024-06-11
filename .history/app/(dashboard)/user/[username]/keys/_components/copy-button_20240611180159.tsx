"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck, Copy } from "lucide-react";
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

  const Icon = isCopied ? CheckCheck : Copy;
  return (
    <Button
      variant={"ghost"}
      className={cn('', isCopied ? 'bg-green-400' : )}
      onClick={onCopy}
      disabled={!value || isCopied}
      size={"sm"}
    >
      <Icon className="h-4 w-4 hover:cursor-pointer" />
    </Button>
  );
};
