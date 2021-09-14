const express = require("express");
const socket = require("socket.io");
const PORT = process.env.PORT || 5000;
const app = express();
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// websocket server
const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let peers = [];
io.on("connection", (socket) => {
  socket.emit("connection", null);
  console.log("new user connected");
  console.log(socket.io);
  socket.on("register-new-user", (data) => {
    peers.push({
      username: data.username,
      socket: data.socketId,
    });
    console.log('registered new user')
    console.log(peers)
  });
});
