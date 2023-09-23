import { URL } from "url";

const ygd=  new URL("https://sgc-analytics.com/")



console.info(ygd.toString());
console.info(`protocol ${ygd.protocol}`);
console.info(`host ${ygd.host}`);
console.info(`pathname ${ygd.pathname}`);
console.info(`searchname ${ygd.searchParams}`)