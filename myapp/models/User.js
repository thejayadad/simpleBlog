import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      avatar: String,
      public_id: String,
      // followers: [{
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'users'
      // }],
      // following: [{
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'users'
      // }]   

}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)