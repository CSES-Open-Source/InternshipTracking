import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      // ID generated by Google Oauth, must be called _id to be queried with .findById()
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Pass in from google
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "Student",
    },
    linkedIn: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    // Only for students
    major: {
      type: String,
    },
    // Only for students
    classLevel: {
      type: String,
    },
    // Only for alumni
    company: {
      type: String,
    },
    // Only for alumni
    shareProfile: {
      type: Boolean,
    },
  },
  {
    // Automatically generates created and updated times
    timestamps: true,
  },
);

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
