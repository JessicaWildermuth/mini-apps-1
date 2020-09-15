const express = require('express');
const app =  express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('/Users/jwildermuth/hackreactor/hrsf130-mini-apps-1/challenge_2/client/index.html')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

