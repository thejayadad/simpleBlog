'use server'
import { revalidatePath } from "next/cache";
import db from "./db";
import getServerUser from "./getServerUser";
import Post from "@/models/Post";
import { redirect } from 'next/navigation';


export const addPost = async (formData) => {
  const user = getServerUser();
  console.log("AddPost User " + user)
  try {

    const { title, imgUri } = Object.fromEntries(formData);

    db.connect();

    const newPost = new Post({
      title,
      imgUri,
      owner: user.id,
    });

    await newPost.save();

  } catch (err) {
    console.error(err);
    throw new Error("Failed to create post!");
  }
  revalidatePath("/");
  redirect("/");
  };