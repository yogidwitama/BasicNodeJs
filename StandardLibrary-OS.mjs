import os from "os";

console.info(os.freemem());
console.info(os.uptime());
console.info(os.homedir());
console.table(os.cpus());
console.table(os.networkInterfaces());