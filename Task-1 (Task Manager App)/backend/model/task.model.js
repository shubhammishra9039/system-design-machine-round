import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    taskName: {
      type: String,
      required: true,
    },
    taskDescription: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "progress", "done"],
      default: "Pending",
    },
  },
  { timestamps: true }
);


export default mongoose.model("Task",taskSchema)
