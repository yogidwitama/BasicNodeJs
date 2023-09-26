// HTTP SERVER
// Standard library cocok jika akan membuat HTTP Server menggunakan standard library NodeJS, namun untuk kasus yang lebih kompleks, direkomendasikan menggunakan library atau framework yang lebih muda menggunakannya

import http from "http";

const server = http.createServer((request, response)=>{
    console.info(request.method);
    if(request.url === "/yogi"){
        response.write("Hello Yogi")
    }else{
        response.write("🤡")
    }
    response.write("Hello");
    response.end();
});

server.listen(3000);