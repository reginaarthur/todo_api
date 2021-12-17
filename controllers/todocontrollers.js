const todoModel = require('../models/todomodels');
    


async function getTodoById(request,response){
   try{ const getItodo= await todoModel.findById(request.params.todoId);
    response.status(200).json(getItodo);

    } catch (error) {
        console.log('something went wrong',error.message);
        }
    }

 

   async function addTodo(request,response){
    try {
        const newTodo = await todoModel.create(request.body);
        response.status(200).json(newTodo);
    } catch (error) {
        console.log('somothing went wrong',error.message);
    }
}
async function getAllTodo(request,response){
    try{
        const get1Todo= await todoModel.find()
        response.status(200).json(get1Todo)
    
    } catch (error) {
        console.log('somothing went wrong',error.message);
}
}
async function updateById(request,response){
    try{
        const updateById= await todoModel.findByIdAndUpdate()
        response.status(200).json(updateById)

    } catch (error) {
        console.log('somothing went wrong',error.message);
}

}

    async function deleteById(request,response){
        try{
            await todoModel.findByIdAndDelete(request.params.todoId);
                response.status(200).json(todoModel);
             } catch (error){
            console.timeIog('something went wrong',error.message);
    }
    }


module.exports ={
addTodo,
getAllTodo,
updateById,
deleteById,
getTodoById
}