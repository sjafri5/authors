var express = require('express');
var app = express();
const path = require('path');
var fs = require('fs')
var mongoose = require('mongoose');

// 6-8  bodyParser allows us to parse post request data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());

// allows us to flash messages, similar to django-messages in python
const flash = require('express-flash');
app.use(flash());

// tells our express app to grab static files from our angular project
app.use(express.static( __dirname + '/public/dist/public'  ));

mongoose.connect('mongodb://localhost/authors'); 
var AuthorSchema = new mongoose.Schema({
   name:  { type: String, required: true, unique: true, minlength: 3 },
})
mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author')

app.get("/authors", (req,res) => {
  Author.find({}, function(err, authors){
    if(err){
      res.json({message: 'error', data: err})
    }else{
      res.json({message: 'success', data: authors})
    }
  })
});

app.post("/create", (req,res) => {
  var author = new Author({name: req.body.name});
  author.save(function(err, author){
    if(err){
      res.json({message: 'error', data: err})
    }else{
      res.json({message: 'success', data: author})
    }
  })
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
    console.log('listening at port 8000');
})

