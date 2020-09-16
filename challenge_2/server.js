const express = require('express');
const fs = require('fs'); //dont think I even installed this
const bodyParser = require('body-parser');
const app =  express();
const port = 3000;
const combineCsvHtml = require('./hmtlString.js')
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

app.use(express.static('client'))



app.post(('/'), (req, res) => {
  var csvFile = parseJSON(JSON.parse(req.body['cvs-report']));
  var formAndCsv = combineCsvHtml(csvFile);
  // res.send(csvFile);
  // res.sendFile('/Users/jwildermuth/hackreactor/hrsf130-mini-apps-1/challenge_2/client/index.html');
  //sned the csvfile AND the html stirng
  //how does my html string add csvfile to the innards of itself
  res.send(formAndCsv);
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})



var parseJSON= function(ogObj) {

  var keys =  Object.keys(ogObj);
  var childrenIndex = keys.indexOf('children');
  keys.splice(childrenIndex, 1);
  keys = keys.join(',')
  var parsed = `${keys}`

  var helper = function(obj) {
    var children = obj.children
    delete obj.children
    var values = Object.values(obj);
    values = values.join(',');
    values = values.slice(0, values.length - 1);
    parsed = `${parsed}\n${values}`
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      helper(child);
    }
  };

  helper(ogObj)
  return parsed;
}





//why is my req.body empty object
    //type issue - does default bodyprser type match post request content header
      //what content header of my post request it - console.log(re.header(''specific header name''))
      //what type my bodyparser is
    //no body to parse
    //error