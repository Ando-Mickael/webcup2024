const { Server } = require("socket.io");

function initSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  const characters = [];

  const generateRandomPosition = () => {
    return [Math.random() * 3, 0, Math.random() * 3];
  };

  const COLORS = ["#2d95d8", "#d85dc1", "#dab860", "#54a149", "#c32e2b"];

  io.on("connection", (socket) => {
    console.log("user connected");

    characters.push({
      id: socket.id,
      position: generateRandomPosition(),
      bodyColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    socket.emit("hello", {
      characters,
      id: socket.id,
    });

    io.emit("characters", characters);

    socket.on("move", (position) => {
      const character = characters.find(
        (character) => character.id === socket.id
      );
      character.position = position;
      io.emit("characters", characters);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");

      characters.splice(
        characters.findIndex((character) => character.id === socket.id),
        1
      );
      io.emit("characters", characters);
    });
  });

  return io;
}

module.exports = initSocket;
