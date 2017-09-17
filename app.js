'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const app = express();

app.use(express.static('public')); // Enabling static files (css, js, ...) http requests
app.use(bodyParser.json()); // For parsing application/json

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + 'public/index.html'));
});

app.post('/', function(request, response) {
  console.log(request.body);
  response.send('Message sent !');
});

app.listen(3000, function() {
  console.log('Express server running on port 3000')
});
