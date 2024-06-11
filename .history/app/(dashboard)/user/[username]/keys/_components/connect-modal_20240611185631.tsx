"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export const ConnectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"primary"} className="rounded-xl">
          Generate Connection
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Connection</DialogTitle>
        </DialogHeader>

        <Alert>
          <AlertTriangle className="h-4 w-4 bg-red-500" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This Action will reset all active stream using the current
            connection
          </AlertDescription>
        </Alert>
      </DialogContent>
    </Dialog>
  );
};
