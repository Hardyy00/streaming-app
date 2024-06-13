"use server";

import {
  IngressAudioEncodingOptions,
  IngressInput,
  IngressClient,
  IngressVideoEncodingOptions,
  RoomServiceClient,
  CreateIngressOptions,
  TrackSource,
  IngressVideoEncodingPreset,
  IngressVideoOptions,
  IngressAudioOptions,
  IngressAudioEncodingPreset,
} from "livekit-server-sdk";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

const ingressClient = new IngressClient();

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
    options.video = new IngressVideoOptions({
      source: TrackSource.CAMERA,
      encodingOptions: {
        case: "preset",
        value: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
      },
    });

    options.audio = new IngressAudioOptions({
      source: TrackSource.MICROPHONE,
      encodingOptions: {
        case: "preset",
        value: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
      },
    });
  }

  const ingress = await IngressClient();
};
