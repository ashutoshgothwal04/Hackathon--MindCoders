import { Message } from "../models/message.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

// Initialize socket.io
let io;

export const initializeSocket = (socketIO) => {
  io = socketIO;
};

// Send a new message
export const sendMessage = async (req, res) => {
  try {
    const { receiverId, propertyId, content, attachments } = req.body;
    const senderId = req.user._id;

    // Create new message
    const message = await Message.create({
      sender: senderId,
      receiver: receiverId,
      property: propertyId,
      content,
      attachments: attachments || [],
    });

    // Populate the message with user details
    const populatedMessage = await Message.findById(message._id)
      .populate("sender", "username fullName avatar")
      .populate("receiver", "username fullName avatar")
      .populate("property", "title images");

    // Emit the message to the receiver
    if (io) {
      io.to(receiverId.toString()).emit("newMessage", populatedMessage);
    }

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: populatedMessage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error sending message",
      error: error.message,
    });
  }
};

// Get all messages between two users for a specific property
export const getMessages = async (req, res) => {
  try {
    const { propertyId, otherUserId } = req.params;
    const userId = req.user._id;

    const messages = await Message.find({
      property: propertyId,
      $or: [
        { sender: userId, receiver: otherUserId },
        { sender: otherUserId, receiver: userId },
      ],
    })
      .populate("sender", "username fullName avatar")
      .populate("receiver", "username fullName avatar")
      .populate("property", "title images")
      .sort({ createdAt: 1 });

    // Mark messages as read
    await Message.updateMany(
      {
        receiver: userId,
        sender: otherUserId,
        property: propertyId,
        isRead: false,
      },
      { isRead: true }
    );

    return res.status(200).json({
      success: true,
      message: "Messages retrieved successfully",
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving messages",
      error: error.message,
    });
  }
};

// Get all conversations for a user
export const getConversations = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get unique conversations
    const conversations = await Message.aggregate([
      {
        $match: {
          $or: [{ sender: userId }, { receiver: userId }],
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $group: {
          _id: {
            $cond: [{ $eq: ["$sender", userId] }, "$receiver", "$sender"],
          },
          lastMessage: { $first: "$$ROOT" },
          unreadCount: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $eq: ["$receiver", userId] },
                    { $eq: ["$isRead", false] },
                  ],
                },
                1,
                0,
              ],
            },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 0,
          userId: "$_id",
          username: "$user.username",
          fullName: "$user.fullName",
          avatar: "$user.avatar",
          lastMessage: 1,
          unreadCount: 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Conversations retrieved successfully",
      data: conversations,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving conversations",
      error: error.message,
    });
  }
};

// Upload message attachment
export const uploadAttachment = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await uploadOnCloudinary(file.path);
    if (!result?.url) {
      return res.status(400).json({
        success: false,
        message: "Error uploading file",
      });
    }

    return res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      url: result.url,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error uploading file",
      error: error.message,
    });
  }
};

// Delete a message
export const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    const userId = req.user._id;

    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    if (message.sender.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this message",
      });
    }

    // Delete attachments from cloudinary if any
    if (message.attachments && message.attachments.length > 0) {
      for (const attachment of message.attachments) {
        const publicId = attachment.split("/").pop().split(".")[0];
        await deleteFromCloudinary(publicId);
      }
    }

    await Message.findByIdAndDelete(messageId);

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting message",
      error: error.message,
    });
  }
};
