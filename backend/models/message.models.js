import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    attachments: [
      {
        type: String, // URLs to files stored in cloudinary
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
messageSchema.index({ sender: 1, receiver: 1 });
messageSchema.index({ property: 1 });
messageSchema.index({ createdAt: -1 });

export const Message = mongoose.model("Message", messageSchema);
