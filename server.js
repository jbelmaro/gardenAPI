var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

app.listen(port);

console.log('Garden RESTful API server started on: ' + port);  
