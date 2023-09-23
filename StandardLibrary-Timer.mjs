// setInterval(()=>{
//     console.info(`Start time at ${new Date()}`);
// }, 10000)

// Timer Promise
import timers from "timers/promises";

// console.info(new Date());
// await timers.setTimeout(5000,"yogi");
// console.info(new Date());


for await(const startTime of timers.setInterval(1000, "ignored")){
    console.info(`Start time at ${new Date()}`)
}