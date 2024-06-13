import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";

import { db } from "@/lib/db";

const receiver = new WebhookReceiver(process.env.LIVEKIT_API_KEY);

async function POST(res: Request) {}
