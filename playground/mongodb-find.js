const {MongoClient,ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect with mongo db server..');
  }
  console.log('Connected to mongodb server...');
  // db.collection('Todos').find({_id:new ObjectId('59df0e655a36bc4a67d702cd')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   if(docs.length===0){
  //     return console.log('Zero data');
  //   }
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });
  db.collection('Users').find({name:'Rajkaran'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch users having name Rajkaran',err);
  });
  db.close();
  });
