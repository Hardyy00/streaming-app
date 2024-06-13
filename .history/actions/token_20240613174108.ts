"use server";

import { v4 as uuid } from "uuid";

import { AccessToken } from "livekit-server-sdk";
import { getSelf } from "@/lib/auth-service";
import { getUserById } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";

export const createViewerToken = async (hostIdentity: string) => {
  let self;

  try {
    self = await getSelf(); // check if user is logged in or not
  } catch {
    // generate mock id and username
    const id = uuid();
    const username = `guest${Math.floor(Math.random() * 1000)}`;

    self = {
      id,
      username,
    };
  }

  const host = await getUserById(hostIdentity);

  if (!host) {
    throw new Error("User not found");
  }

  const isBlocked = await isBlockedByUser(host.id);

  if (isBlocked) {
    throw new Error("User is Blocked");
  }

  const isHost = self.id === host.id;

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,

    {
      identity: isHost ? `host-${self.id}` : self.id,
    }
  );
};
