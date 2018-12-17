// Build your Express app inside server.js

var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static('./client/dist'));

app.listen(PORT, () => (console.log(`listening on ${PORT}`)));