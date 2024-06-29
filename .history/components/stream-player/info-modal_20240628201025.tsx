"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { UploadDropzone } from "@/lib/uploadthing";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ElementRef, FormEvent, useRef, useState, useTransition } from "react";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Hint from "../hint";
import { Trash } from "lucide-react";
import Image from "next/image";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  initialName,
  initialThumbnailUrl,
}) => {
  const router = useRouter();
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

          <div className="space-y-2">
            <Label>Thumbnail</Label>
            {thumbnailUrl ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <div className="absolute top-2 right-2 z-[10]">
                  <Hint label={"Remove Thumbnail"} side="left">
                    <Button
                      type="button"
                      disabled={isPending}
                      onClick={() => {}}
                      variant={"ghost"}
                      className="h-auto w-auto p-1.5 rounded-xl"
                      asChild
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </Hint>
                </div>
                <Image
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl border outline-dashed outline-muted">
                <UploadDropzone
                  endpoint="thumbnailUploader"
                  appearance={{
                    label: {
                      color: "#FFFFFF",
                    },
                    allowedContent: {
                      color: "#FFFFFF",
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    console.log("hii");
                    setThumbnailUrl(res?.[0]?.url);
                    router.refresh();
                  }}
                />
              </div>
            )}
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
