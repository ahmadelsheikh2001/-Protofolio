// socket.js
const socketIO = require("socket.io");
const notificationCtl = require("../controllers/notification.control");

var io;

function initializeSocket(server) {
  io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("A user connected with socket ID:", socket.id);

    // Handle reconnection events
    socket.on("disconnect", () => {
      console.log(`User disconnected with socket ID ${socket.id}`);
    });
    socket.on("seen", () => {
      notificationCtl.allSeenNotofication();
    });
  });
  return io;
}

function getIo() {
  if (!io) {
    throw new Error("Socket.IO has not been initialized");
  }
  return io;
}

module.exports = { initializeSocket, getIo };
