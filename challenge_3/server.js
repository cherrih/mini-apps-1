const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./database/index.js');

app.use(express.static('public'));
app.use(bodyParser());
app.use(morgan('tiny'))

app.post('/info', (req, res) => {
  var user = req.body;
  console.log(user)
  var queryString = `INSERT INTO user (name, email, password, addressline1, addressline2, city, state, zip, phonenumber, creditcardnumber, expiry, cvv, billingzip) VALUES(
    '${user.name}',
    '${user.email}',
    '${user.password}',
    '${user.addressline1}',
    '${user.addressline2}',
    '${user.city}',
    '${user.state}',
    '${user.zip}',
    '${user.phonenumber}',
    '${user.creditcardnumber}',
    '${user.expiry}',
    '${user.cvv}',
    '${user.billingzip}'
    );`;
  console.log(queryString);
  //query
  db.query(queryString, (error, results) => {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send('Got it!')
  });
})

app.listen(PORT, () => (console.log(`Listening on ${PORT}`)));