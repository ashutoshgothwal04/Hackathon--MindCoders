import { Server } from "socket.io";
import { initializeSocket } from "../controllers/message.controllers.js";

export const initializeSocketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    },
  });

  // Initialize socket in message controller
  initializeSocket(io);

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Join user's room
    socket.on("join", (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined their room`);
    });

    // Handle typing status
    socket.on("typing", ({ receiverId, propertyId }) => {
      socket.to(receiverId).emit("typing", { propertyId });
    });

    // Handle stop typing
    socket.on("stopTyping", ({ receiverId, propertyId }) => {
      socket.to(receiverId).emit("stopTyping", { propertyId });
    });

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
};
