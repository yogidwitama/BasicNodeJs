// Standard library untuk menggunakan thread ketika mengeksekusi JS secara paralel
// Worker Threads sangat cocok ketika membuat kode program yang membutuhkan jalab secara paralel, dan biasanya kasusnya adalah ketika program membutuhkan proses CPU intensive seperti enkripsi atau kompresi
//  Cara kerja Worker Threads mirip dengan Web Worker di JS Web API
import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./wroker.mjs");

worker1.addListener("message", (message)=>{
    console.info(`thread-${threadId} receive message:${message}`)
});

worker2.addListener("message", (message)=>{
    console.info(`thread-${threadId} receive message:${message}`)
});


worker1.postMessage(10);
worker2.postMessage(10)