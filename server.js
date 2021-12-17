const { request, response } = require("express");
const express = require("express");

const app = express();
require('dotenv').config();
const PORT = process.env.PORT||3450;

const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const todocontroller = require('./controllers/todocontrollers')

app.use(express.json());
app.get('/',(request,response)=>{
    response.status(200).json({message:'Hello welcome to Regina todo_api'});
});

app.post('/todo', todocontroller.addTodo);
app.get('/todo', todocontroller.getAllTodo);
app.put('/todo',todocontroller. updateById);
app.delete('/todo',todocontroller.deleteById);
app.get('/todo/:todoId',todocontroller.getTodoById);

app.listen(PORT,() =>{
    console.log('My server is up and running on port:', PORT);
    mongoose.connect(process.env.DB_URL)

    .then(function(){
        console.log('database is connected');
    })
    .catch(function(error){
        console.log('database is connected',error.message);
    });
});