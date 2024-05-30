import { db } from "./db";
import { getSelf } from "./auth-service";
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
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          id: userId,
        },
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return users;
};
