// const Peter = "peter";
// const kamoru = "kamoru";
// // const sayHi 
// module.exports.sayHi = (name)=>{
//     console.log(`i am right ${name}`)
// }
//operating system module
// const os = require("os")

// const user = os.userInfo()
// console.log(user)

// console.log(`This system uptime is ${os.uptime()}seconds`)
// const constantOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(constantOS)



// path module
// const path = require("path")

// console.log(path.sep);

// const filePath = path.join("/content", "/subfolder", "test.txt")
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, "/content", "/subfolder", "test.txt")
// console.log(absolute)




// how to read and write detail in a file(sync)
// const { readFileSync, writeFileSync } = require("fs")

// const first = readFileSync("./context/first.txt", "utf-8");
// const second = readFileSync("./context/second.txt", "utf8");

// writeFileSync(
//     "./context/result-sync.txt",
//     `Here is the result : ${first}, ${second}`,
//     { flag : "a"}
// )

//alternative read and write;

// const { readFile, writeFile } = require("fs")

// readFile("./context/first.txt","utf-8",(err, result)=>{
// if(err)
// {
//     console.log(err)
//     return;
// }
// console.log(result)
// })

// fs async type
// const { readFile, writeFile } = require("fs");

// readFile("./context/first.txt","utf-8", (err, result)=>{
// if(err){
//     console.log(err)
//     return;
// }
// const first = result;
// readFile("./context/second.txt","utf-8", (err, result)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     const second = result
// writeFile(
//     "./context/result-sync.txt",
//     `Here is the result : ${first}, ${second}`,
//     (err, result)=>{
//         if (err){
//             console.log(err)
//             return;
//         }
//         console.log(result)
//     }
// )})
// })


//http module to create a server
// const http = require("http");

// const server = http.createServer((req, res)=>{
// if(req.url ==="/"){
//     res.end("welcome to our home page")
// }
// if(req.url === "/about"){
//     res.end("here is all about us")
// }
// res.end(`
//      <h1>Ooops!!!</h1>
//      <p>The page you are trying to enter does not exist</p>
//      <a href="/">back to home page</a>
//     `)
// // res.write("welcome to our home page")
// // res.end()
// })
// server.listen(5000)