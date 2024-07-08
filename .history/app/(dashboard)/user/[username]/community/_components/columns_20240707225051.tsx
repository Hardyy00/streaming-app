"use client";

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
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
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <UserAvatar
          username={row.original.username}
          isLive={false}
          imageUrl={row.original.imageUrl}
        />
      </div>
    ),
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
