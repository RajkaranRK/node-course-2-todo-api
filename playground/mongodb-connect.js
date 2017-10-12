const MongoClient =  require('mongodb').MongoClient;

var user ={name:'Rajkaran',Age:20};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect with mongo db server..');
  }
  console.log('Connected to mongodb server...');
  // db.collection('Todos').insertOne({
  //   text:'Someting Todo',
  //   completed:false
  // },(err,result)=>{
  //   if(err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name:'Rajkaran',
  //   Age:20,
  //   location:'Greater Nooida'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert to Users',err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.collection('Users').insertOne({
    name:'Rajkaran',
    Age:20,
    location:'Greater Nooida'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert to Users',err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();

});
