// Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP
// Net Server dan Client merupakan object Stream, sehingga kita bisa baca datanya, tulis datanya dan menambahkan listener
//  https://nodejs.org/dist/latest-v16.x/docs/api/net.html

import net from "net";


const server = net.createServer((client) => {
    console.info("Client Connected");
    client.addListener("data", (data) => {
        console.info(`receive data: ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`)
    })
})

server.listen(5555, "localhost")
