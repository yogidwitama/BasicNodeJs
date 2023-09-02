const buffer = Buffer.from("Yogi Dwitama", "utf8");

console.table(buffer.toString("base64"));
console.table(buffer.toString("hex"));

const bufferkedua= Buffer.from("WW9naSBEd2l0YW1h","base64");

console.table(bufferkedua.toString("utf8"));


