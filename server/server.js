var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(JSON.stringify(doc,undefined,2));
  },(err)=>{
    res.status(400).send(err);
  });

  console.log(req.body);

});

app.listen(3000,()=>{
  console.log('Listing at port 3000');
});
