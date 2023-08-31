const FileSystem ={
    title:"File System",
    // File System merupakan standard library yang bisa digunakan untuk memanipulasi file system
    // Dalam File System terdapat 3 jenis Library
    // Pertama libary yang bersifat blocking atau synchronus
    // Kedua library yang bersifat non-blocking atau asynchronus menggunakan callback
    // Ketiga libary yang bersifat non-blocking atau asynchronus menggunakan promise
}

import fs from "fs";

// read file
const buffer = fs.readFileSync("helloWord-Nodejs.js");
console.info(buffer.toString());


// write file
fs.writeFileSync("temp.txt","hello node")


