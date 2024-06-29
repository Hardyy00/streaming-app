"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ElementRef, FormEvent, useRef, useState, useTransition } from "react";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  initialName,
  initialThumbnailUrl,
}) => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const [name, setName] = useState<string>(initialName);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(
    initialThumbnailUrl
  );
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    startTransition(() => {
      updateStream({ name })
        .then(() => {
          toast.success("Stream Updated");

          closeRef.current?.click();
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} size={"sm"} className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Stream Info</DialogTitle>
        </DialogHeader>

        <form className="space-y-14" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              placeholder="Stream Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={isPending}
            />
          </div>
          <div className="flex justify-between ">
            <DialogClose asChild>
              <Button variant={"ghost"} type="button" ref={closeRef}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant={"primary"}
              type="submit"
              disabled={isPending}
              className="rounded-xl"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
