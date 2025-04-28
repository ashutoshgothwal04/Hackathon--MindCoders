import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "inr",
    },
    paymentMethod: {
      type: String,
      enum: ["card", "upi"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "succeeded", "failed"],
      default: "pending",
    },
    stripePaymentId: {
      type: String,
      required: true,
    },
    metadata: {
      type: Map,
      of: String,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema); 