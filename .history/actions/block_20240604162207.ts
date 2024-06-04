import { blockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
  try {
    const block = await blockUser(id);
  } catch (err) {
    throw new Error((err as Error).message); // typecast err into Error
  }
};
