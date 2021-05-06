const http = require("http");
const { readFileSync } = require("fs")

const HomePage = readFileSync("./navbar-app/index.html");
const HomeStyle = readFileSync("./navbar-app/styles.css");
const HomeLogo = readFileSync("./navbar-app/logo.svg");
const HomeLogic = readFileSync("./navbar-app/browser-app.js");

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
    }
     //styles
     else if (url === "/styles.css") {
        res.writeHead(200,{"content-type":"text/css"})
        res.end(HomeStyle)
    }
     //Logo
     else if (url === "/logo.svg") {
        res.writeHead(200,{"content-type":"image/svg+xml"})
        res.end(HomeLogo)
    }
     //Logic
     else if (url === "/browser-app.js") {
        res.writeHead(200,{"content-type":"text/javascript"})
        res.end(HomeLogic)
    }
    //404
    else{
        res.writeHead(400,{"content-type":"text/html"})
        res.end("<h1>page no found</h1>")
    }
    
})

server.listen(5000)