import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Who are you ?", (name) => {
    console.info(`Halo ${name}`);
    input.close();
});
