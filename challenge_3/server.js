const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


var mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pw0nZor1!',
  database: 'miniapp'
})

db.connect()

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.static('compiled'))

app.post('/', (req, res) => {
  db.query(`INSERT INTO users (username, email, passwords, addressLineOne, addressLineTwo, city, stateof, zip, phone, creditcardNumber, expiration, cvv, billingzip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, req.body.values , (error, data) => {
    if(error) {
      console.log(error);
      res.send(error);
    } else {
      db.query(`SELECT * FROM users WHERE username = "${req.body.values[0]}"`, (error, userdata) => {
        if (error) {
          console.log(error)
        } else {
          res.send(JSON.stringify(userdata[userdata.length - 1]));
        }
      })
    }
  })
});



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});









