import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  //   const self = await getSelf();

  //   console.log(self);

  return users;
};
