"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

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
    header: "Username",
    cell: ({ row }) => {},
  },
  {
    accessorKey: "createdAt",
    header: "Date blocked",
  },
  {
    accessorKey: "actions",
    cell: () => (
      <Button variant={"secondary"} className="rounded-xl">
        Unblock
      </Button>
    ),
  },
];
