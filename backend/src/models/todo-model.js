import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String },
    //   createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    // },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { collection: "todos" }
);

export const todoModel = model("Todo", todoSchema);
