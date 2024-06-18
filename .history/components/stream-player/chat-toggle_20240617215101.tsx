"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import Hint from "@/components/hint";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { Button } from "../ui/button";

export const ChatToggle = () => {
  const { collapse, onCollapse, onExpand } = useChatSidebar((state) => state);

  const Icon = collapse ? ArrowLeftFromLine : ArrowRightFromLine;

  const label = collapse ? "Expand" : "Collapse";
  return (
    <div className=" w-[4rem]">
      <Hint label={label}>
        <Button variant={"ghost"} size={"sm"}>
          <Icon />
        </Button>
      </Hint>
    </div>
  );
};
