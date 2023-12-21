import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
     imgUrl: String,
    draft: {
      type: Boolean,
      default: false
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },

}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)