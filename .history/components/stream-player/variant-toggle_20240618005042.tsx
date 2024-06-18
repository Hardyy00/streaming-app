"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import Hint from "@/components/hint";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { Button } from "../ui/button";

export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);

  const Icon = collapse ? ArrowLeftFromLine : ArrowRightFromLine;

  const label = collapse ? "Expand" : "Collapse";

  const onToggle = () => {
    if (collapse) {
      onExpand();
    } else {
      onCollapse();
    }
  };
  return (
    <Hint label={label}>
      <Button
        variant={"ghost"}
        size={"sm"}
        onClick={onToggle}
        className=" h-auto p-2 hover:bg-white/10 hover:text-primary rounded-xl"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};
