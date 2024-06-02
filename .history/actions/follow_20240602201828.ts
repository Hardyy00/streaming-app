"use server";

import { followUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    await followUser(id);
  } catch (err) {
    throw new Error("Internal error");
  }
};
