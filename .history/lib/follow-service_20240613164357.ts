import { db } from "./db";
import { getSelf } from "./auth-service";

export const getFollowedUsers = async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const self = await getSelf();

    // return followed user , those who do not block the current user
    const users = await db.follow.findMany({
      where: {
        followerId: self.id,
        following: {
          blocking: {
            none: {
              blockedId: self.id,
            },
          },
        },
      },

      include: {
        following: {
          include: {
            stream: {
              select: {
                isLive: true,
              },
            },
          },
        },
      },
    });

    const followedUsers = users.map((user) => user.following);

    return followedUsers;
  } catch (err) {
    return [];
  }
};

export const isFollowingUser = async (id: string) => {
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

    if (otherUser.id === self.id) {
      return true;
    }

    const existingFollow = await db.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: self.id,
          followingId: otherUser.id,
        },
      },
    });

    return !!existingFollow;
  } catch (err) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (existingFollow) {
    // return ;

    throw new Error("User already followed");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockedId_blockerId: {
        blockedId: otherUser.id,
        blockerId: self.id,
      },
    },
  });

  if (existingBlock) {
    throw new Error("User is blocked!");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otherUser.id,
    },

    include: {
      following: true,
      follower: true,
    },
  });

  return follow;
};

export const unFollowUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("We cannot unfollow ourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (!existingFollow) {
    throw new Error("Not Following");
  }

  const follow = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: {
      follower: true,
      following: true,
    },
  });

  return follow;
};
