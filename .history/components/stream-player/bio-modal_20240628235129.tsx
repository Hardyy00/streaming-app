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

export const BioModal: React.FC<BioModalProps> = ({ initialValue }) => {
  const [bio, setBio] = useState<string | null>(initialValue);
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"}>Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bio</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <DialogClose>
            <Button type="button" variant={"ghost"}>
              Close
            </Button>
          </DialogClose>

          <Button variant={"primary"} className="rounded-xl">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
