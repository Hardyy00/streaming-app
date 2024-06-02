"use server";

import { followUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    throw new Error("Error occurred");
    // const res = await followUser(id);

    console.log("Called " + id);
  } catch (err) {
    throw new Error("Internal error");
  }
};
