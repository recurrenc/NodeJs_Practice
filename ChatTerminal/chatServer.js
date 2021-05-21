const http = require("http").createServer();
const io = require("socket.io")(http);
const port = 4000;

http.listen(port, () => console.log(`Lisning on port ${port}`));

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("message", (evt) => {
    console.log(evt);
    socket.broadcast.emit("message", evt);
  });
});

io.on("Disconnect", (evt) => {
  console.log("Someone left");
});
