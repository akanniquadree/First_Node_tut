
const express = require('express')
const routers = express.Router();

let { people }= require('../data')

routers.get('/',(req, res)=>{
    res.status(200).json({sucess:true,data:people})
})

routers.post('/', (res, req)=>{
    const {name} = req.body
    if(!name){
        res.status(404).json({sucess:false, msg:'please provide name value'})
    }
    res.status(201).send({sucess:true, person:name})
})

routers.post('/postman',(req, res)=>{
    const { name } = req.body
    if(!name){
        return res.status(404).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).send({success: true, data: [...people, name]})
})


routers.put('/:id',(req, res)=>{
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person)=>person.id === Number(id)) 
    
    if(!person){
       return res.status(404).json({sucess:false, msg:`no person with ${id}`})
    }
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({sucess:true, data: newPerson})
})

routers.delete('/:id', (res, req)=>{
    const person = people.find((person)=>person.id === Number(req.params.id))

    if(!person){
        return res.status(404).json({success:false, msg:`no person with ${req.params.id}`})
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200),json({sucess: true, data:newPeople})
})

module.exports = routers