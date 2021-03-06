// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function (ufo) {
    console.log(ufo);
    // Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");
    //Use `Object.entries` to console.log each ufo report value
    Object.entries(ufo).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
// 'Filter Table' button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Use the form input to filter the data by datetime
    var filterData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filterData);

    //Populate tbody with rows and cells needed for filteredData
    var tbody = d3.select("tbody");
    tbody.html("");
    // YOUR CODE HERE!
    filterData.forEach(function (ufosighting) {
        console.log(ufosighting);
        // Use d3 to append one table row `tr` for each ufo report object
        var row = tbody.append("tr");
        //Use `Object.entries` to console.log each ufo report value
        Object.entries(ufosighting).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
