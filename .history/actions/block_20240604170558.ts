"use server";

import { blockUser, unBlockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  // TODO: Adapt to disconnect from livestream (for logged in user)
  // TODO: Allow ability to kick the guest  (for not logged in user)
  try {
    const block = await blockUser(id);

    revalidatePath("/");

    if (block) {
      revalidatePath(`/${block.blocked.username}`);
    }

    return block;
  } catch (err) {
    // throw new Error((err as Error).message); // typecast err into Error

    console.log(err);
  }
};

export const onUnblock = async (id: string) => {
  try {
    const unblock = await unBlockUser(id);

    revalidatePath("/");

    if (unblock) {
      revalidatePath(`/${unblock.blocked.username}`);
    }

    return unblock;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
