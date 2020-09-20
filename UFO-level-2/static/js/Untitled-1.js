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
