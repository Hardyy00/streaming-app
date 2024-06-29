"use client";

interface BioModalProps {
  initialValue: string | null;
}

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import React, { ElementRef, useRef, useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

export const BioModal: React.FC<BioModalProps> = ({ initialValue }) => {
  const [isPending, startTransition] = useTransition();
  const closeRef = useRef<ElementRef<"button">>(null);
  const [bio, setBio] = useState<string | null>(initialValue);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    startTransition(() => {
      updateUser({ bio })
        .then(() => {
          toast.success("User Bio updated");
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
          <DialogTitle>Bio</DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler} className="space-y-4">
          <Textarea
            placeholder="Write something about yourself"
            value={bio ?? ""}
            onChange={(e) => setBio(e.target.value)}
            disabled={isPending}
            className="resize-none"
          />

          <div className="flex justify-between">
            <DialogClose asChild>
              <Button
                type="button"
                variant={"ghost"}
                className="rounded-xl"
                ref={closeRef}
              >
                Close
              </Button>
            </DialogClose>

            <Button
              disabled={isPending}
              variant={"primary"}
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
