import io from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL, {
  transports: ["websocket"],
  upgrade: false,
  withCredentials: true,
  cors: {
    origin: process.env.REACT_APP_API_URL,
    methods: ["GET", "POST"],
  },
});

export default socket;
