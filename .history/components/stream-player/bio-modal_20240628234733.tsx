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

export const BioModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"}>Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bio</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
