// Global AsyncLocalStorage
// saat menggunakan JavaScript untuk menggunakan Async Await, biasanya perlu membuat terlebih dahulu function yang ditandai sebagai async
// saat menggunakan Module, secara default global code adalah Async, oleh karena itu bisa menggunakan Async Await
// Kecuali jika membuat function, maka function tersebut harus ditandai sebagai Async

function samplePromise(){
    return Promise.resolve({value:"Yogi"})
}

const name = await samplePromise();
console.info(name.value);