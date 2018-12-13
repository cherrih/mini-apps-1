const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'))

app.post('/info', (req, res) => {
  console.log(req.body);
  res.send('Got it!')
})

app.listen(PORT, () => (console.log(`Listening on ${PORT}`)));