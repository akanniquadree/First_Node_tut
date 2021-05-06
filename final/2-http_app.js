const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    res.send("home Page")
})
app.get("/about",(req, res)=>{
    res.send("about Page")
})
app.all('*',(req, res)=>{
    res.status(404).send("<h1>resource not found</h1>")
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000.....");
})


//app.get
//app.use
//app.listen
//app.post
//app.all
//app.put
//app.delete
// const express = require("express");
// const path = require("path");
// const app = express();

// app.use(express.static('./public'))
// app.get("/", (req, res)=>{
//     res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"))
// })
// app.all("*",(req, res)=>{
//     res.status("404").send('<h1>page is not found</h1>')
// })

// app.listen(5000,()=>{
//     console.log("server is listening on port 5000.....");
// })
