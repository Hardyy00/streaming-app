"use server";

import { User } from "@prisma/client";


export const updateUser = async (values : Partial<User)=>{

    try{


    } catch(err){

        throw new Error("Internal Error");
    }
}
