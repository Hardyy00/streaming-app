"use client";

import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  MessageSquare,
  Users,
} from "lucide-react";
import Hint from "@/components/hint";
import { useChatSidebar, ChatVariant } from "@/store/use-chat-sidebar";
import { Button } from "../ui/button";

export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);

  const isChat = variant === ChatVariant.CHAT;

  const Icon = isChat ? Users : MessageSquare;

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : CharVariant.CHA;
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
