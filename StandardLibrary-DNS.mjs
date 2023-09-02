// DNS
// DNS merupaka standard library yang bisa digunakan untuk berkerja dengan DNS(domain name server)

import dns from "dns/promises";

const address= await dns.lookup("www.sgc-analytics.com");

console.info(address.address);
console.info(address.family);