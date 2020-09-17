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

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));
app.use(express.static('compiled'))

app.post('/', (req, res) => {
  if(req.body.name) {
    var params = [req.body.name, req.body.email, req.body.password];
    db.query('INSERT INTO users (username, email, passwords) VALUES (?, ?, ?)', params , (error, data) => {
      if(error) {
        res.send(error);
      } else {
        console.log(data);
      }
    })
  }
  // } else if (req.body.city) {
  //   console.log(req.body);
  //   var params = []
  // }
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});









