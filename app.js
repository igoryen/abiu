var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Abiu!'); // 1
});

console.log('Started on port 3000...') // 2


app.listen(3000);

//============================================
// 1) executes 2nd, when user hits the site
// 2) executes 1st, when you do "node app.js" 