// Console 
// Merupakan standard library secara global bisa digunakan tanpa harus import modul, dan console melakukan print text ke stdout
// dan kita bisa buat console sendiri

import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

const log = new Console({
    stdout:logFile,
    stderr:logFile
});


log.info("Hello");
log.error("oops");

const person={
    name:"Yogi",
    hobby:"turu"
};

log.table(person)