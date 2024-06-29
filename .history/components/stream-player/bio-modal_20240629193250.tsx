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
import React, { useState } from "react";
import Hint from "@/components/hint";
import { Textarea } from "@/components/ui/textarea";

export const BioModal: React.FC<BioModalProps> = ({ initialValue }) => {
  const [bio, setBio] = useState<string | null>(initialValue);

  const submitHandler = () => {};
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

        <form onSubmit={submitHandler} className="space-y-2">
          <Textarea
            placeholder="Write something about yourself"
            value={bio ?? ""}
            onChange={(e) => setBio(e.target.value)}
            disabled={false}
            className="resize-none"
          />

          <div className="flex justify-between">
            <DialogClose>
              <Button type="button" variant={"ghost"} className="rounded-xl">
                Close
              </Button>
            </DialogClose>

            <Button disabled={false} variant={"primary"} className="rounded-xl">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
