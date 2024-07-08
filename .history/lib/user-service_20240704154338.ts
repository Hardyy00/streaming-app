import { db } from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },

    include: {
      stream: {
        select,
      },
      _count: {
        select: {
          followedBy: true, // includes the number of users following current user
        },
      },
    },
  });

  return user;
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },

    include: {
      stream: true,
    },
  });

  return user;
};
