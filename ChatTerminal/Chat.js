const socket = require("socket.io-client")("http://localhost:4000");
const repl = require("repl");
const chalk = require("chalk");

let userName = null;

socket.on("cisconnect", () => socket.emit("disconnect"));
socket.on("connect", () => {
  console.log("------ | Start Chatting | -------");
  userName = process.argv[2];
});

socket.on("message", (data) => {
  const { cmd, userName } = data;
  console.log(chalk.green(userName + ": " + cmd.split("\n")[0]));
});

repl.start({
  prompt: "",
  eval: (cmd) => {
    socket.send({ cmd, userName });
  },
});
