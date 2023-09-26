// NodeJS secara default berjalan single thread, kecuali jika membuat thread manual menggunakan woker thread dalam satu process
// NodeJS mempunyai standard library bernama cluster, dimana bisa menjalankan beberapa process NodeJS secara sekaligus
// sangat cocok ketika menggunakan CPU yang multicore, shingga semua core bisa di utilisasi dengan baik, misalkan saat dijalankan process NodeJS sejumlah CPU Core

// cluster primary

import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";


if (cluster.isPrimary) {
    // jalankan worker
    console.info(`primary: ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (woker) => {
        console.info(`woker ${woker.id} is exited`)
    })
};

if (cluster.isWorker) {
    console.info(`woker:${process.pid}`);
    const server = http.createServer((request, response) => {
        response.write(`response from port ${process.pid}`);
        response.end();
        response.exit()
    });
    server.listen(3000)
};