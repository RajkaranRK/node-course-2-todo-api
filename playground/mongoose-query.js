const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59e0ff0d3a7d432c53e88191';

// var id = '59dfd06f575111381ad9fb7c';
//
// Todo.find({_id:id}).then((todos)=>{
//   if(todos.length===0){
//     return console.log('Todos not found');
//   }
//   console.log(todos);
// });
//
//
// Todo.findOne({_id:id}).then((todo)=>{
//   if(!todo){
//     return console.log('Todo not found');;
//   }
//   console.log(todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log('ID not Found');;
//   }
//   console.log(todo);
// });

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User Not found...');
  }
  console.log('User:',JSON.stringify(user,undefined,2));
});
