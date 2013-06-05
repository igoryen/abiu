var express = require('express');
var app = express();                   // 3


/*
app.get('/', function(req, res){
  res.send('Abiu!'); // 1
});

*/


// 4

app.get('/hello.txt', function(req, res){      // 6
  var body = 'Hello World';                    // 5
  res.setHeader('Content-Type', 'text/plain'); // 7
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

//===== error handling middleware ============

app.use(function(err, req, res, next){         // 9
  console.error(err.stack);
  res.send(500, 'Something broke!');
});
//=============================================



console.log('Started on port 3000...')          // 2
app.listen(3000);                               // 8 


//============================================
// 1) executes 2nd, when user hits the site
//    here the res object is augmented by 'express'. send() is one of the higher level methods. send() adds the Content-Length for you.
// 2) executes 1st, when you do "node app.js" 
// 3) creating a new application instance called 'app' with 'express'
// 4) app.VERB() is how you define "routes"
// 5) this string will come out in response to "GET/" 
// 6) "req" and "res" - the exact same objects that Node provides to you 
// 7) invoke a function on the res object
// 8) invoking express.listen() to bind and listen to connections
// 9) error-handling middleware must be defined with an arity of 4 (like this)