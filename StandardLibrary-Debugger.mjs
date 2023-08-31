
function sayHello(name) {
    debugger;
    return `Hello ${name}`
};
const name = "Yogi";
console.info(sayHello(name));

// Breakpoint
// Dalam debugging terdapat istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi code program
// Biasanya hal ini dilakukan untuk mengawasi data-data di sekitar lokasi berhentinya code tersebut
// untuk menambahkan breakpoint bisa menambahkan kata kunci debugger

// Menjalankan Mode debug
// Jika menjalankan file JavaScript hanya dengan menggunakan perintah "node namafile.js", maka secara default code tidak akan dijalankan dalam mode debug
// Untuk itu perlu ditambahkan perintah inspect "node inspect namafile.js"

// Command debugger
// cont, c: Continue execution
// next, n: Step next
// step, s: Step in
// out, o: Step out
// pause: Pause Running code

