"use client";

import { IngressInput } from "livekit-server-sdk";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="RTMP">RTMP</SelectItem>
            <SelectItem value="WHIP">WHIP</SelectItem>
          </SelectContent>
        </Select>

        <Alert className="rounded-xl">
          <AlertTriangle className="h-4 w-4" color="red" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This Action will reset all active stream using the current
            connection
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <DialogClose>
            <Button variant={"ghost"}>Cancel</Button>
          </DialogClose>

          <Button onClick={() => {}} variant="primary" className="rounded-xl">
            Generate Anyway
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
