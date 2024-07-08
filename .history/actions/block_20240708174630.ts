"use server";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unBlockUser } from "@/lib/block-service";
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

export const onBlock = async (id: string) => {
  const self = await getSelf();
  let blockedUser;
  try {
    blockedUser = await blockUser(id);
  } catch {
    // user is a guest
  }

  try {
    // room id is the user's id
    await roomService.removeParticipant(self.id, id);
  } catch {
    // user is not in the room
  }

  revalidatePath(`/u/${self.username}/community`);

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  try {
    const unblock = await unBlockUser(id);

    revalidatePath("/");

    if (unblock) {
      revalidatePath(`/${unblock.blocked.username}`);
    }

    return unblock;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
