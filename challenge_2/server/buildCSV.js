const CSVbuilder = (input) => {
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
    output += '</n>' + arr.join(',');
    if (obj.children.length){
      obj.children.forEach(child => {
        fillValues(child);
      })
    }
  }
  fillValues(input);

  return output;
}

module.exports = {CSVbuilder};