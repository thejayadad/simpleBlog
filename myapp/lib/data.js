import db from "./db";

import Post from "@/models/Post";
import { getPostPipeLine } from "./postPipeLine";

export const getPosts = async (query)=> {
    const pipeline = await getPostPipeLine({query})
    console.log(pipeline)
    try {
    return{msg: 'success'}        
    } catch (error) {
        throw new Error("Failed to get all post!");

    }
}