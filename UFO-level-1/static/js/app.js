// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function(ufo) {
    console.log(ufo);
    // Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");
    //Use `Object.entries` to console.log each ufo report value
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
// 'Filter Table' button
var button = d3.select("#filter-btn");
// filter the database and display
button.on("click", function() {
    console.log(d3.event.target);
});


// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    // Use the form input to filter the data by datetime
  var filterData = tableData.filter(ufo => ufo.datetime === inputValue); 
  console.log(filterData);
//   //  Display the filtered dataset
//   filterData.forEach(appendTable);


  
//     var table = document.getElementById("ufo-table");
//     var tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       var td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         if (td.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
  

// };

// //Populate tbody with rows and cells needed for filteredData
// function appendTable(report) {
//     var tbody = d3.select("tbody");
// // Assign new appended row into a variable for later use
//     var row = tbody.append('tr');

// // Loop through each record
// 	Object.entries(report).forEach(([key, value]) => { 

// // Append a 'td' element to the row with the value of each key in the object
//     var cell = row.append("td");
//     cell.text(value);

// 	});

// };

var tbody = d3.select("tbody");
// YOUR CODE HERE!
filterData.forEach(function(ufodata) {
  console.log(ufodata);
  // Use d3 to append one table row `tr` for each ufo report object
  var row = tbody.append("tr");
  //Use `Object.entries` to console.log each ufo report value
  Object.entries(ufodata).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
  });
});
};
