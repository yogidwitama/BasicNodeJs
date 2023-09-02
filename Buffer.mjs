// Buffer
// Buffer merupakan object yang berisi urutan byte dengan panjang tetap 
// Buffer merupakan turunan dari tipe data Uint8Array

const buffer = Buffer.from("Yogi");
console.table(buffer)
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());