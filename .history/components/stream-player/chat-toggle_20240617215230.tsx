"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import Hint from "@/components/hint";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { Button } from "../ui/button";

export const ChatToggle = () => {
  const { collapse, onCollapse, onExpand } = useChatSidebar((state) => state);

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
      <Button variant={"ghost"} size={"sm"} onClick={onToggle}>
        <Icon />
      </Button>
    </Hint>
  );
};
