"use server";

import { getSelf } from "@/lib/auth-service";
import { User } from "@prisma/client";

export const updateUser = async (values: Partial<User>) => {
  try {
    const self = await getSelf();
  } catch (err) {
    throw new Error("Internal Error");
  }
};
