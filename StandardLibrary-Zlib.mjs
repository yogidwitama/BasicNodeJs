// Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("StandardLibrary-Zlib.mjs");
// console.info(source.toString());
const result = zlib.gzipSync(source);

// console.info(result.toString());
// compress
// fs.writeFileSync("StandardLibrary-Zlib.mjs.txt", result);
// decompress
 

