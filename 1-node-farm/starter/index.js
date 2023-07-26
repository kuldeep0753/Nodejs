// console.log("Hello");
// // fs is a file System

// //Blocking, synchronous way
const fs=require("fs");
// // console.log(fs);

// //read text from a file
// const textIn =fs.readFileSync("./txt/input.txt" ,"utf-8");
// console.log(textIn);
// const textOut=`this is waht we know about the avaocado: ${textIn}. \n Created on ${Date.now()}`;
// console.log(textOut);
// //write text in a file
// fs.writeFileSync("./txt/output.txt",textOut);
// console.log('File written!')

//Non-Blocking asynchronou
fs.readFile("./txt/start.txt","utf-8",()=>{console.log("async operation perform")})
console.log("Call this function")
