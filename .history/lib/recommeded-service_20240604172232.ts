import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch (err) {
    userId = null;
  }

  let users = [];

  if (userId) {
    // if user if logged in , then get recommendations except him
    // and the recommended users must not be followed by the user
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },

          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },

          {
            NOT: {
              blockedBy: {
                some: {
                  blockerId: self.id,
                },
              },
            },
          },
        ],
      },
    });
  } else {
    // if not logged in, then get recommendations including him
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return users;
};
