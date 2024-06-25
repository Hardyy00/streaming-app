"use client";

import { toast } from "sonner";
import { useTransition } from "react";
import { MinusCircle } from "lucide-react";

import Hint from "@/components/hint";
import { onBlock } from "@/actions/block";
import { cn, stringToColor } from "@/lib/utils";
import { Button } from "../ui/button";

interface CommunityItemProps {
  hostName: string;
  viewerName: string;
  participantName: string;
  participantIdentity: string;
}

export const CommunityItem: React.FC<CommunityItemProps> = ({
  hostName,
  participantIdentity,
  participantName,
  viewerName,
}) => {
  return <div>Community Item</div>;
};
