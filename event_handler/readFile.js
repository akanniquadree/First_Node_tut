const { readFile } = require("fs")

console.log("starting a first task")
//check file path
readFile("./context/first.txt", "utf-8", (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result);
    console.log("completed first task");
})
console.log("starting next task")