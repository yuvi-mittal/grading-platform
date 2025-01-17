import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    courseId: {
      type: String,
      required: true,
      unique: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: "User", // Faculty assigned to the course
      required: true,
    },
    tas: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Teaching assistants assigned to the course
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Students enrolled in the course
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema);
