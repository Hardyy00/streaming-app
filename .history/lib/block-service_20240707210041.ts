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

export const isBlockingUser = async (id: string) => {
  try {
    const self = await getSelf();

    const block = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockerId: self.id,
          blockedId: id,
        },
      },
    });

    return !!block;
  } catch {
    return false;
  }
};

export const blockUser = async (id: string) => {
  try {
    const self = await getSelf();

    if (self.id === id) {
      throw new Error("Cannot block yourself");
    }

    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) {
      throw new Error("User doesn't exists");
    }

    const existingBlock = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockerId: self.id,
          blockedId: otherUser.id,
        },
      },
    });

    if (existingBlock) {
      throw new Error("User already blocked");
    }

    const block = await db.block.create({
      data: {
        blockedId: otherUser.id,
        blockerId: self.id,
      },
      include: {
        blocked: true, // to include this in the response
      },
    });

    return block;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const unBlockUser = async (id: string) => {
  try {
    const self = await getSelf();

    if (id === self.id) {
      throw new Error("Cannot unblock yourself");
    }
    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    const existingBlock = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockedId: otherUser.id,
          blockerId: self.id,
        },
      },
    });

    if (!existingBlock) {
      throw new Error("Not Blocked");
    }

    const unBlock = await db.block.delete({
      where: {
        id: existingBlock.id,
      },
      include: {
        blocked: true,
      },
    });

    return unBlock;
  } catch {
    throw new Error("Internal server error");
  }
};

export const getBlockedUsers = async () => {
  const self = await getSelf();

  const blockedUsers = await db.block.findMany({});
};
