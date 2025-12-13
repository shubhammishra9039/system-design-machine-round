import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    phone: {
      required: true,
      type: Number,
    },

    password: {
      required: true,
      type: String,
    },
    task: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      default: null,
    }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
