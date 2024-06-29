"use server";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unBlockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  const self = await getSelf();
  let blockedUser;
  try {
  } catch {
    // user is a guest
  }
  try {
    // console.log(id);
    blockedUser = await blockUser(id);

    revalidatePath("/");

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }

    return blockedUser;
  } catch (err) {
    // user is a guest
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
