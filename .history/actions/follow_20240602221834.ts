"use server";

import { followUser, unFollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);

    revalidatePath("/"); // to update the ui

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }

    return followedUser;
  } catch (err) {
    throw new Error("Internal error");
  }
};


export const onUnFollow = async (id: string)=>{

    try{

        const unFollowedUser = await unFollowUser(id);

        revalidatePath('/');

        if(unFollowUser){

            revalidatePath(`/${unFollowUser}`)
        }
    }
}