"use server";

import { followUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    // throw new Error("Error occurred");
    const res = await followUser(id);

    revalidatePath("/");

    if(followed)
  } catch (err) {
    throw new Error("Internal error");
  }
};
