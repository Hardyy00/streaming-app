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

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
