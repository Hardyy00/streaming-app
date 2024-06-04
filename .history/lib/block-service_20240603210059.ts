import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const isBlockedByUser = async (id: string) => {
  try {
    const self = await getSelf();

    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (self.id === otherUser.id) {
      return false;
    }

    const blocked = await db.block.findFirst({
      where: {
        blockedId: otherUser.id,
        blockerId: self.id,
      },
    });

    return !!blocked; // convert blocked to boolean
  } catch {
    return false;
  }
};
