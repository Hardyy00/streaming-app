"use server";

import {
  IngressAudioEncodingOptions,
  IngressInput,
  IngressClient,
  IngressVideoEncodingOptions,
  RoomServiceClient,
  CreateIngressOptions,
  TrackSource
  IngressVideoEncodingPreset,
} from "livekit-server-sdk";


import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

export const createIngress = async (ingressType: IngressInput) => {
  const self = await getSelf();

  // TODO: Reset previous ingress

  const options: CreateIngressOptions = {
    name: self.username,
    roomName: self.id,
    participantName: self.username,
    participantIdentity: self.id,
  };

  if (ingressType === IngressInput.WHIP_INPUT) {
    options.enableTranscoding = false;
  } else {
    options.video = {
      source: TrackSource.CAMERA,
      preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
    };
  }
};
