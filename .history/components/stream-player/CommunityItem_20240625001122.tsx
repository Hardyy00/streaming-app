"use client";
import { toast } from "sonner";
import { useTransition } from "react";
import { MinusCircle } from "lucide-react";
import Hint from "@/components/hint";
import { onBlock } from "@/actions/block";
import { cn, stringToColor } from "@/lib/utils";
import { Button } from "../ui/button";
import { CommunityItemProps } from "./community-item";

export const CommunityItem: React.FC<CommunityItemProps> = ({
  hostName,
  participantIdentity,
  participantName,
  viewerName,
}) => {
  const [isPending, startTransition] = useTransition();
  const color = stringToColor(participantName);
  const isSelf = participantName === viewerName;
  const isHost = viewerName === hostName;

  const handleBlock = () => {
    if (!participantName || isSelf || !isHost) {
      return;
    }

    startTransition(() => {
      onBlock(participantIdentity)
        .then((data) => {
          toast.success(`You successfully blocked ${data.blocked.username}`);
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <div
      className={cn(
        "group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/10  hover:rounded-[1rem]",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      {/* <p style={{ color }}>{participantName}</p> */}

      {isHost && !isSelf && (
        <Hint label="Block">
          <Button
            disabled={isPending}
            onClick={handleBlock}
            className="h-auto w-auto p-1 opacity-0 group-hover:opacity-100 transition "
          >
            <MinusCircle />
          </Button>
        </Hint>
      )}
    </div>
  );
};
