var express = require('express');
var app = express();                   // 3


/*
app.get('/', function(req, res){
  res.send('Abiu!'); // 1
});
console.log('Started on port 3000...') // 2
app.listen(3000);
*/


// 4

app.get('/hello.txt', function(req, res){     // 6
  var body = 'Hello World';                   // 5
  res.setHeader('Content-Type', 'text/plain'); // 7
  res.setHeader('Content-Length', body.length);
  res.end(body);
});




//============================================
// 1) executes 2nd, when user hits the site
// 2) executes 1st, when you do "node app.js" 
// 3) creating a new application instance called 'app' with 'express'
// 4) app.VERB() is how you define "routes"
// 5) this string will come out in response to "GET/" 
// 6) "req" and "res" - the exact same objects that Node provides to you 
// 7) invoke a function on the res object