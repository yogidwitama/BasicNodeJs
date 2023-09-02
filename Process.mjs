// Process
// Merupakan standard library yang digunakan untuk mendapatkan informasi proses NodeJS yang sedang berjalan
// Process juga Merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam Process

import process from "process";

process.addListener("exit", function (exitCode) {
    console.info(`NodeJS exit with code ${exitCode}`)
});


console.info(process.version);
console.table(process.argv);



// process.exit(1);