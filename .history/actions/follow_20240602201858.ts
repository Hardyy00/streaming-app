"use server";

import { followUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    const res = await followUser(id);

    console.log(res);
  } catch (err) {
    throw new Error("Internal error");
  }
};
