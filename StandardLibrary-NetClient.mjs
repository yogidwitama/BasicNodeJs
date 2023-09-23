import net from "net";


const client =net.createConnection({
    port:5555,
    host:"localhost"
});

client.addListener("data",(data)=>{
    console.info(`Recieve data from server :${data.toString()}`)
});


setInterval(()=>{
    client.write(`${process.argv[2]}\r\n`)
}, 3000)