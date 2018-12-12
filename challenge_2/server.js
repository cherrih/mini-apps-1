// build your Express app

// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report 
// (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). 
// In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, 
// but child objects might not contain the same properties. 
// In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

// Use Express to serve up an index.html file and its associated assets
// Implement all the report generation logic on the server. 
// Do not use any external libraries (such as via npm). 

const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
// const morgan = require('morgan');

app.use(express.static('client'));
app.use(bodyParser());
// app.use(morgan('tiny'));

const buildCSV = (jsonInput) => {
  
}

app.post('/upload_json', (req, res) => {
  console.log(JSON.parse(req.body.input));
  res.send('I have posted')
});

app.listen(PORT, () => console.log('Listening on port: ', PORT))
