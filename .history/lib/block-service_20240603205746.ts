import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const isBlockedByUser = async (id: string) => {
  try {
    const self = await getSelf();

    const blockedUser = await db.block.findFirst({
      where: {
        blockedId: id,
        blockerId: self.id,
      },
    });
  } catch {
    return false;
  }
};
