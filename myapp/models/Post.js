import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
    
    },
   imgUri: String,
   owner: String,
}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)