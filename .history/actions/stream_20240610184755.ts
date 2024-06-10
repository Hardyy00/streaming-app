"use server";

import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { getStreamByUserId } from "@/lib/streams-service";
import { getSelf } from "@/lib/auth-service";

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf();

    const selfStream = await db.stream.findUnique({
      where: {
        userId: self.id,
      },
    });
  } catch {
    throw new Error("Internal Error");
  }
};
