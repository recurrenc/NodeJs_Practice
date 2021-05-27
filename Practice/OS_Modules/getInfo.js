const os = require("os");
console.log("\t\t====================================");
console.log("\t\t=========== SYSTEM INFO  ===========");
console.log("\t\t====================================\n");

const ops = "Operating System : " + os.version();
const opv = "Version : " + " " + os.release();
const cpu = os.cpus();
const numberOfCpu = cpu.length;
const processor = cpu[0].model;
const hostName = os.hostname();
const tmem = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(3);
const fmem = (os.freemem() / (1024 * 1024 * 1024)).toFixed(3);
const uname = os.userInfo().username;
const homeDir = os.userInfo().homedir;
const mac = os.networkInterfaces()["Wi-Fi"][0].mac;
const ip = os.networkInterfaces()["Wi-Fi"].filter({ family: "IPv4" });
console.log(ip);
