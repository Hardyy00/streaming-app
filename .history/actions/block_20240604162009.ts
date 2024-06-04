import { blockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
  try {
    const block = await blockUser(id);
  } catch (err: Error) {
    throw new Error(err.message);
  }
};
