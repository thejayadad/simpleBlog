'use server'
import Post from "@/models/Post"
import db from "./db"
import getServerUser from "./getServerUser"

export const addPost = async (formData)=> {
    const { title, imgUrl, draft,  } =
    Object.fromEntries(formData);
    const user = await getServerUser()
    try {
        db.connect()
        const newPost = new Post({
            title,
            draft,
            imgUrl,
            creator: user?._id,
            favorite_users,        
          });
          await newPost.save()
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create post!");
    }
    revalidatePath("/");
    redirect("/");
}