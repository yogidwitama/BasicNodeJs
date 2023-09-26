// HTTP CLIENT
// HTTP merupakan standard libaray yang mempunyai satu fitur di moduke HTTP  adalah HTTP Client, dimana bisa melakukan simulasi HTTP Request menggunakan NodeJS
// Terdapat 2 jenis module HTTp di NodeJS,HTTP dan HTTPS
import https from "https";


const endpoint = "https://hookb.in/1gmEeY3JLZhd6N00616L";

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        response.addListener("data", (data) => {
            console.info(`Receive data: ${data.toString()}`)
        })
    })
});

const body =JSON.stringify({
    firstName:"Yogi",
    lastName:"Dwitama"
});

request.write(body);
request.end();