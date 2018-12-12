const CSVHTMLbuilder = (input) => {
  var output = '';
  var array = [];

  //make first row from keys joined by ','
  for (var key in input) {
    if (key !== 'children') {
      array.push(key);
    }
  }
  output += array.join(', ');

  //make helper function
  var fillValues = (obj) => {
    var arr = [];
    for (var key in obj){
      if(key !== 'children') {
        arr.push(obj[key])
      }
    }
    output += '</br>' + arr.join(', ');
    if (obj.children.length){
      obj.children.forEach(child => {
        fillValues(child);
      })
    }
  }
  fillValues(input);

  return output;
}

var htmlRenderer = (csv) => {
  return (
    `<html>
    <head>
      <title>CSV Report Generator</title>
    </head>
    <body>
      <h2>CSV Report Generator</h2>
      <form action="/upload_json" method="POST" enctype="multipart/form-data">
        <input type="file" id="docpicker" accept=".json" name="fileinput">
        <input type="submit" value="generate CSV">
      </form>
      <h2>Here's your CSV</h2>
      <div>${csv}</div>
      <script src="app.js"></script>
    </body>
  </html>`
  )
}


module.exports = {
  CSVHTMLbuilder,
  htmlRenderer
};