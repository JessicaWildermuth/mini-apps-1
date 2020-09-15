const express = require('express');
const fs = require('fs'); //dont think I even installed this
const bodyParser = require('body-parser');
const app =  express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('/Users/jwildermuth/hackreactor/hrsf130-mini-apps-1/challenge_2/client/index.html')
})

app.post(('/'), (req, res) => {
  console.log(JSON.stringify(req.body))
  res.send(req.body);
  res.sendFile('/Users/jwildermuth/hackreactor/hrsf130-mini-apps-1/challenge_2/client/index.html');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})



//parse the inputted reqs into cvs
//keep it as an object
//go through the object to create string of specific values

var parseJSON= function(ogObj) {
  //need to probably make this recursive
  //need to go through the objects keys and values and add them to a string
  //only need to add the keys once (and not add the children key) (can delete)
  var keys =  Object.keys(ogObj);
  var childrenIndex = keys.indexOf('children');
  keys.splice(childrenIndex, 1);
  keys = keys.join(',')
  var parsed = `${keys}`

  //now that the string contains all the keys
  //we need to grab all the values (except for children)
  //then do the same for any children objects
  //create helper function
  var helper = function(obj) {
    var children = obj.children
    delete obj.children
    var values = Object.values(obj);
    values = values.join(',');
    values = values.slice(0, values.length - 1);
    parsed = `${parsed}
${values}`
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      helper(child);
    }
  };
  helper(ogObj)
  console.log(parsed);
}

/*
example input
{"cvs-report":"{       \"firstName\": \"Beth\",       \"lastName\": \"Johnson\",       \"county\": \"San Francisco\",       \"city\": \"San Francisco\",       \"role\": \"Broker/Sales Person\",       \"sales\": 7500000,       \"children\": []     }"}
*/
//example output
//firstName,lastName,county,city,role,sales
/*
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
Allen,Price,San Mateo,Burlingame,Sales Person,2500000
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000 */