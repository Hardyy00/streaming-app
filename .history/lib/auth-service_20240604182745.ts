import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";
import { getUserByUsername } from "./user-service";
import { use } from "react";

export const getSelf = async () => {
  const self = await currentUser();

  //   console.log(self);
  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });

  if (!user) {
    throw new Error("Not found");
  }

  return user;
};

export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();

  if (!self || !self?.username) {
    throw new Error("Unauthorized");
  }
};
