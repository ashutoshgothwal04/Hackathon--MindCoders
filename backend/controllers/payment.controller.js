import Stripe from 'stripe';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Payment } from '../models/payment.model.js';

// Initialize Stripe with a check for the secret key
let stripe;
try {
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  } else {
    console.warn('Stripe secret key not found. Payment functionality will not work.');
  }
} catch (error) {
  console.error('Error initializing Stripe:', error);
}

// Create a payment intent for card payments
export const createPaymentIntent = async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json(
        new ApiResponse(500, null, "Stripe is not configured. Please check your environment variables.")
      );
    }

    const { amount, currency = 'inr' } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json(
        new ApiResponse(400, null, "Invalid amount")
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to smallest currency unit (paise)
      currency,
      payment_method_types: ['card'],
      metadata: {
        userId: req.user._id.toString(),
      },
    });

    // Create a payment record
    await Payment.create({
      userId: req.user._id,
      amount,
      currency,
      paymentMethod: 'card',
      stripePaymentId: paymentIntent.id,
      status: 'pending',
    });

    return res.status(200).json(
      new ApiResponse(200, { clientSecret: paymentIntent.client_secret }, "Payment intent created successfully")
    );
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return res.status(500).json(
      new ApiResponse(500, null, "Error creating payment intent")
    );
  }
};

// Create a payment link for UPI payments
export const createUPIPaymentLink = async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json(
        new ApiResponse(500, null, "Stripe is not configured. Please check your environment variables.")
      );
    }

    const { amount, currency = 'inr' } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json(
        new ApiResponse(400, null, "Invalid amount")
      );
    }

    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: 'Payment',
            },
            unit_amount: Math.round(amount * 100), // Convert to smallest currency unit (paise)
          },
          quantity: 1,
        },
      ],
      payment_method_types: ['upi'],
      metadata: {
        userId: req.user._id.toString(),
      },
    });

    // Create a payment record
    await Payment.create({
      userId: req.user._id,
      amount,
      currency,
      paymentMethod: 'upi',
      stripePaymentId: paymentLink.id,
      status: 'pending',
    });

    return res.status(200).json(
      new ApiResponse(200, { paymentLink: paymentLink.url }, "UPI payment link created successfully")
    );
  } catch (error) {
    console.error("Error creating UPI payment link:", error);
    return res.status(500).json(
      new ApiResponse(500, null, "Error creating UPI payment link")
    );
  }
};

// Handle Stripe webhooks
export const handleWebhook = async (req, res) => {
  if (!stripe) {
    return res.status(500).json(
      new ApiResponse(500, null, "Stripe is not configured. Please check your environment variables.")
    );
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Update payment status in database
      await Payment.findOneAndUpdate(
        { stripePaymentId: paymentIntent.id },
        { status: 'succeeded' }
      );
      console.log("Payment succeeded:", paymentIntent.id);
      break;
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      // Update payment status in database
      await Payment.findOneAndUpdate(
        { stripePaymentId: failedPayment.id },
        { status: 'failed' }
      );
      console.log("Payment failed:", failedPayment.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};

// Get payment history for a user
export const getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(10);

    return res.status(200).json(
      new ApiResponse(200, { payments }, "Payment history retrieved successfully")
    );
  } catch (error) {
    console.error("Error retrieving payment history:", error);
    return res.status(500).json(
      new ApiResponse(500, null, "Error retrieving payment history")
    );
  }
}; 