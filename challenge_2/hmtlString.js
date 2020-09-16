var combineCsvHtml = function(csv) {
 return  `<!DOCTYPE html>
<html>
  <head>
    <title>CVS Report Generator</title>
  </head>
    <body>
      <div>
        <h1>CVS Report Generator</h1>
        <form method="post">
          <label>Submit Report</label>
          <input type="file" name="csv-report" id="csv-report" accept=".json" required>
          <input type="submit" value="Submit CVS File">
        </form>
        <span>${csv}</span>
      </div>
    </body>
</html>`;

};


module.exports = combineCsvHtml;