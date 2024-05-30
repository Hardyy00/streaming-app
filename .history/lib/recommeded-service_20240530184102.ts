import { db } from "./db";
import { getSelf } from "./auth-service";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  let userId;

  try {
    const self = await getSelf();
  } catch (err) {}

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
