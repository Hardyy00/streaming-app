"use server";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const updateUser = async (values: Partial<User>) => {
  try {
    const self = await getSelf();

    const validData = {
      bio: values.bio,
    };

    const user = await db.user.update({
      where: {
        id: self.id,
      },
    });
  } catch (err) {
    throw new Error("Internal Error");
  }
};
