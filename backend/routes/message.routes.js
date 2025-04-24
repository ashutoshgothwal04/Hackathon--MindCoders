import express from "express";
import {
  sendMessage,
  getMessages,
  getConversations,
  uploadAttachment,
  deleteMessage,
} from "../controllers/message.controllers.js";

import { verifyJWT } from "../middlewares/JWT_Verify.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Apply JWT verification middleware to all routes
router.use(verifyJWT);

// Send a new message
router.post("/", sendMessage);

// Get messages between two users for a specific property
router.get("/property/:propertyId/user/:otherUserId", getMessages);

// Get all conversations for a user
router.get("/conversations", getConversations);

// Upload message attachment
router.post("/upload", upload.single("attachment"), uploadAttachment);

// Delete a message
router.delete("/:messageId", deleteMessage);

export default router;