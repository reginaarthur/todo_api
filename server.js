const { request, response } = require("express");
const express = require("express");

const app = express();
const mongoose = require('mongoose')


app.get('/',(request,response)=>{
    response.send("hello this is a get method ");

});
app.post('/',(request,response)=>{
    response.send("hello this is a post response");
});
app.put('/',(request,response)=>{
    response.send("hello this is a put response");
});
    app.get('/todos',(request,response)=>{
        response.send([{
            "title": 'plan trip to kumasi',
            "description":'I will be going to kumasi this weekend',
            "time":'today',
            "isCompleted":false

    }]);
});

app.listen(3000,() =>{
    console.log('My server is up and running on port 3000');
    mongoose.connect('mongodb+srv://Regina:nanamensen@cluster0.nbak0.mongodb.net/todo_db?retryWrites=true&w=majorityvvvvv')
    .then(function(){
        console.log('database is connected');
    })
    .catch(function(error){
        console.log('database is connected',error.message);
    });
});