const {MongoClient,ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect with mongo db server..');
  }
  console.log('Connected to mongodb server...');

  //delete many

  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });


  //deleteOne

  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });


  //findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'Rajkaran'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id:new ObjectId("59df0b7ba84bad1174b4bc64")}).then((result)=>{
  console.log(result);
  });




  });
