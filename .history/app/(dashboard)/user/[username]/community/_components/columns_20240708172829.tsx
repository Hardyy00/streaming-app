"use client";

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BlockedUser = {
  id: string;
  userId: string;
  imageUrl: string;
  username: string;
  createdAt: string;
};

export const columns: ColumnDef<BlockedUser>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        className="rounded-xl"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Username
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <UserAvatar
          username={row.original.username}
          isLive={false}
          imageUrl={row.original.imageUrl}
        />
        <span>{row.original.username}</span>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        className="rounded-xl"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Blocked
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "actions",

    cell: () => (
      <div className="flex items-center justify-center">
        <Button variant={"secondary"} className="rounded-xl">
          Unblock
        </Button>
      </div>
    ),
  },
];
