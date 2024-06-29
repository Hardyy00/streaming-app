"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  initialName,
  initialThumbnailUrl,
}) => {
  return <div>Info MOdal</div>;
};
