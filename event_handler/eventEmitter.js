const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response",()=>{
    console.log(`data recieved`)
})

customEmitter.emit("response")


//http event syntax
const http = require("http")

const server = http.createServer()

server.on("request",(req, res)=>{
    res.end("welcome")
})

server.listen(5000)