import { stringify } from "querystring";
import util from "util";

const firstName="yogi";
const lastName="Dwitama";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));


// using json
const person ={
    firstName:"Yogi",
    lastName:"Dwitama"
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person))

