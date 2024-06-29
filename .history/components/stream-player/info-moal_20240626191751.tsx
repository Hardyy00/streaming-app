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

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  initialName,
  initialThumbnailUrl,
}) => {
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

        <form className="space-y-14">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              placeholder="Stream Name"
              onChange={() => {}}
              value={initialName}
              disabled={false}
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
