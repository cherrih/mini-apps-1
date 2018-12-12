const htmlRenderer = (csv) => {

  
  return (
    `<html>
    <head>
      <title>CSV Report Generator</title>
    </head>
    <body>
      <h2>CSV Report Generator</h2>
      <form action="/upload_json" method="POST" enctype="multipart/form-data">
        <input type="file" id="docpicker" accept=".json" name="fileinput">
        <input type="submit" value="Generate CSV">
      </form>
      <h2>Here's your CSV</h2>
      <div>${csv}</div>
      <form action="/download" method="GET">
        <input type="submit" value='Download'>
      </form>
      <script src="app.js"></script>
    </body>
  </html>`
  )
}


module.exports = { htmlRenderer };