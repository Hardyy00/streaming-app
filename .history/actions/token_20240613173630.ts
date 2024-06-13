"use server";

import { v4 as uuid } from "uuid";

import { AccessToken } from "livekit-server-sdk";
import { getSelf } from "@/lib/auth-service";
import { getUserById } from "@/lib/user-service";

export const createViewerToken = async (hostIdentity: string) => {
  let self;

  try {
    self = await getSelf(); // check if user is logged in or not
  } catch {
    const id = uuid();
    const username = `guest${Math.floor(Math.random())}`;
  }
};
