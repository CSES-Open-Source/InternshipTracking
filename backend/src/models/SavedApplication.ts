import { InferSchemaType, Schema, model } from "mongoose";

const savedApplicationSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    materialsNeeded: {
      type: [String],
      default: [],
    },
    deadline: {
      type: Date,
      required: false,
    },
  },
  {
    // Automatically generates created and updated times
    timestamps: true,
  },
);

type SavedApplication = InferSchemaType<typeof savedApplicationSchema>;

export default model<SavedApplication>(
  "SavedApplication",
  savedApplicationSchema,
);
