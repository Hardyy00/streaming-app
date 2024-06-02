"use server";

import { followUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);

    revalidatePath("/"); // to update the ui

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }
  } catch (err) {
    throw new Error("Internal error");
  }
};
