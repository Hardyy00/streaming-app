import { db } from "./db";
import { getSelf } from "./auth-service";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {

  let userId = 
  const self = await getSelf();

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
