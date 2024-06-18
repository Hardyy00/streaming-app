"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import Hint from "@/components/hint";
import { useChatSidebar } from "@/store/use-chat-sidebar";

export const ChatToggle = () => {
  const { collapse, onCollapse, onExpand } = useChatSidebar((state) => state);

  const Icon = collapse ? ArrowRightFromLine : ArrowLeftFromLine;

  const label = collapse ? "Expand" : "Collapse";
  return <div>Chat Toggle</div>;
};
