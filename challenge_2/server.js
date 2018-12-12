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
const PORT = 3001;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const fs = require('fs');

const htmlRenderer = require('./server/CSVhtml.js').htmlRenderer;
const CSVbuilder = require('./server/buildCSV.js').CSVbuilder;

const app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(morgan('tiny'));

app.post('/upload_json', (req, res) => { 
  var input = req.files.fileinput.data.toString();
  var jsonInput = JSON.parse(input);
  var CSVOutput = CSVbuilder(jsonInput);

  fs.writeFile('./server/data.csv', CSVOutput, (err) => {
    if (err) { throw err; }
    res.send(htmlRenderer(CSVOutput));
  });
});

app.get('/download', (req, res) => {
  res.download('./server/data.csv');
})

app.listen(PORT, () => console.log('Listening on port: ', PORT))
