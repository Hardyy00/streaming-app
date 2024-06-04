import { blockUser, unBlockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  try {
    const block = await blockUser(id);

    revalidatePath("/");

    if (block) {
      revalidatePath(`/${block.blocked.username}`);
    }
  } catch (err) {
    throw new Error((err as Error).message); // typecast err into Error
  }
};

export const onUnBlock = async (id: string) => {
  try {
    const unblock = await unBlockUser(id);

    revalidatePath("/");

    if (unblock) {
      revalidatePath(`/${unblock.blocked.username}`);
    }
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
