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
          <textarea type="textarea" name="cvs-report" id="cvs-report" required>${csv}</textarea>
          <input type="submit" value="Submit CVS File">
        </form>
      </div>
    </body>
</html>`;

};


module.exports = combineCsvHtml;