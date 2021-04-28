const http = require("http");
const { readFileSync } = require("fs")

const HomePage = readFileSync("./index.html")

const server = http.createServer((req, res)=>{
    const url = req.url;
    //home page
    if(url === "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(HomePage)
    }
    else if (url === "/home") {
        res.writeHead(200,{"content-type":"text/html"})
        res.end(HomePage)
    }
    //about page
    else if (url === "/about") {
        res.writeHead(200,{"content-type":"text/html"})
        res.end("<h1>About page</h1>")
    }//404
    else{
        res.writeHead(400,{"content-type":"text/html"})
        res.end("<h1>page no found</h1>")
    }
    
})

server.listen(5000)