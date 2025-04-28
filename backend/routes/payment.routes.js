import { Router } from "express";
import { verifyJWT } from "../middlewares/JWT_Verify.js";
import {
  createPaymentIntent,
  createUPIPaymentLink,
  handleWebhook,
  getPaymentHistory,
} from "../controllers/payment.controller.js";

const router = Router();

// Card payment routes
router.route("/create-payment-intent").post(verifyJWT, createPaymentIntent);

// UPI payment routes
router.route("/create-upi-payment").post(verifyJWT, createUPIPaymentLink);

// Webhook route (no auth required as it's called by Stripe)
router.route("/webhook").post(handleWebhook);

// Payment history
router.route("/history").get(verifyJWT, getPaymentHistory);

export default router; 