// Data for each cell
var data = [
    ['TIMING/DAY','10.30','12.30','2.00'],
    ['MON', 'HTML', 'CSS', 'JS'],
    ['TUE', 'JSON', 'REACT', 'JAVA'],
    ['WED', 'SQL', 'J2EE', 'DSA']
   
  ];
  var table = document.createElement('table');
  table.style.border = '1px solid black';
  
  for (var i = 0; i < 4; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < 4; j++) {
      var cell = document.createElement('td');
  
      cell.style.border = '1px solid black';
  
      // Set cell content
      var cellText = document.createTextNode(data[i][j]);
      cell.appendChild(cellText);
       
      // Append the cell to the row
      row.appendChild(cell);
    }
  
    // Append the row to the table
    table.appendChild(row);
  }
  
  // Append the table to the body of the document
  document.body.appendChild(table);
  