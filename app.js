const http = require("http");

const server = http.createServer((req, res)=>{
if(req.url ==="/"){
    res.end("welcome to our home page")
}
if(req.url === "/about"){
    res.end("here is all about us")
}
res.end(`
     <h1>Ooops!!!</h1>
     <p>The page you are trying to enter does not exist</p>
     <a href="/">back to home page</a>
    `)
// res.write("welcome to our home page")
// res.end()
})
server.listen(5000)