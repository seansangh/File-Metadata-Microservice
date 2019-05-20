'use strict';

var express = require('express');
var cors = require('cors');
var multer= require('multer');
var mult= multer({dest: './public'})
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.route('/api/fileanalyse')
   .post(mult.single('upfile'), function(req,res){
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
