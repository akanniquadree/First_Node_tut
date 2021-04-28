const { writeFileSync } = require ("fs")
for (let i = 0; i < 10000; i++) {
    writeFileSync('./context/bigg.txt', 
                    `hello world ${i}\n`, 
                    {flag: "a"})
}
    //     "./context/result-sync.txt",
    //     `Here is the result : ${first}, ${second}`,
    //     { flag : "a"}
    // )
    const { createReadStream } = require("fs")

const stream = createReadStream ('./context/bigg.txt', {highWaterMark: 90000, encoding: "utf-8" });

stream.on('data', (result)=>{
    console.log(result)
})
stream.on ('error',(err)=>{
    console.log(err)
})