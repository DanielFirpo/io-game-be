function startListener(server) {

    const io = require("socket.io")(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });

    // let players = [];

    io.on("connection", function (socket) {
        console.log("new connection")
        socket.emit("ConnectSuccess", "Connected!");
    });

}

module.exports = startListener;