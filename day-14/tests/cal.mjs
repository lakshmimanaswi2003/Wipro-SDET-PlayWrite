// const { sum, sub } = require('./op.mjs')

import sum from "./op.mjs";
import path from "path";// here we are importing the path


function calculator(a, b) {
    const s = sum(a, b);
    // const su = sub(a, b);

    console.log(s);
    
}

calculator(2, 3)

console.log(path.resolve(process.cwd()));//here we are printing the path in the terminal
//here path.resolve is used to convert the path to absolute path
//here process.cwd() is nothing but current directory
//path.resolve(process.cwd()) the meaning it is giving the absolute path of the current directory.


// require(''), module.exports
// .mjs -> import, export 