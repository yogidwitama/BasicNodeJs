
// Events
// Event merupakan standard library di NodeJS yang bisa digunakan sebgai implementasi Event listeners
// Didalam Event terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk menampung data listener per jenis event
// lalu bisa melakukan emmit untuk mentrigger jenis event dan  mengirim data ke event tersebut

import { EventEmitter } from "events";


const emmitter = new EventEmitter();

emmitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`)
});

emmitter.addListener("hello", (name)=>{
    console.info(`Halo ${name}`)
});

emmitter.emit("hello", "Yogi");