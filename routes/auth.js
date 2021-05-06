const express = require('express')
const routers = express.Router();



routers.post('/', (req, res) => {
    const {name} = req.body;
    if(name){
            return res.status(202).send(`Welcome ${name}`)
    }res.status(401).send('Please Provide Credentials')
    
})

module.exports = routers