import { db } from "./db";
import { getSelf } from "./auth-service";

export const isFollowingUser = async (id: string) => {

    try{

        const self = await getSelf();
    }
};
