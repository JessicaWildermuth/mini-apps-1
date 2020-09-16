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
  //what type of content header do I get when dealing with a file instead of text?
  //same as before, so I am using the correct body parser
  //what does the data look like?
  //the body has a property value of a string of the file name
  //how do I read the file?
  //read directions - told to refactor requests
  var fileContent = fs.readFileSync('/Users/jwildermuth/hackreactor/hrsf130-mini-apps-1/challenge_2/samples/sales_report.json', (err, data) => {
    if (error) {
      return error;
    } else {
      return data;
    }
  });
  var csvFile = parseJSON(JSON.parse(fileContent.toString()));
  var formAndCsv = combineCsvHtml(csvFile);
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