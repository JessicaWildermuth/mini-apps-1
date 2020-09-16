const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pw0nZor1!'
})



app.use(express.static('public'));
app.use(express.static('compiled'))


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});









