import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const isBlockedByUser = async (id: string) => {
  // to tell,if i am blocked by an another user
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

    const existingBlock = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockedId: self.id,
          blockerId: otherUser.id,
        },
      },
    });

    return !!existingBlock; // convert blocked to boolean
  } catch {
    return false;
  }
};

export const blockUser = async (id: string) => {
  try {
    const self = await getSelf();

    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) {
      throw new Error("User doesn't exists");
    }

    const existingBlock = await db.block.findUnique({
      where: {},
    });

    const blockedUser = await db.block.create({
      data: {
        blockedId: otherUser.id,
        blockerId: self.id,
      },
    });

    return blockedUser;
  } catch {
    throw new Error("Internal Error");
  }
};
