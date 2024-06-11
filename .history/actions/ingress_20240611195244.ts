"use server";

import {
  IngressAudioEncodingOptions,
  IngressInput,
  IngressClient,
  IngressVideoEncodingOptions,
  TrackSource,
  RoomServiceClient,
} from "livekit-server-sdk";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);


export const createIngress = async (ingressType : IngressInput)