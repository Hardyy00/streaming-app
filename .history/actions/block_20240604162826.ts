import { blockUser, unBlockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  // TODO: Adapt to disconnect from livestream
  try {
    const block = await blockUser(id);

    revalidatePath("/");

    if (block) {
      revalidatePath(`/${block.blocked.username}`);
    }

    return block;
  } catch (err) {
    throw new Error((err as Error).message); // typecast err into Error
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
