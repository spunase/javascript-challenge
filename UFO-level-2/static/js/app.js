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
    // Select the date element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    // Get the value property of the date element
    var dateValue = dateElement.property("value");
    // Select the city element and get the raw HTML node
    var cityElement = d3.select("#city");
    // Get the value property of the city element
    var cityValue = cityElement.property("value").toLowerCase().trim();
    // Select the state element and get the raw HTML node
    var stateElement = d3.select("#state");
    // Get the value property of the state element
    var stateValue = stateElement.property("value").toLowerCase().trim();
    // Select the country element and get the raw HTML node
    var countryElement = d3.select("#country");
    // Get the value property of the country element
    var countryValue = countryElement.property("value").toLowerCase().trim();
    // Select the shape element and get the raw HTML node
    var shapeElement = d3.select("#shape");
    // Get the value property of the shape element
    var shapeValue = shapeElement.property("value").toLowerCase().trim();

    
    var filterData = tableData;

    //  Create if statements for multiple filters
    if (dateValue != "") {
        filterData = filterData.filter(ufo => ufo.datetime === dateValue);  
    }
    if (cityValue != "") {
        filterData = filterData.filter(ufo => ufo.city === cityValue);     
    }
    if (stateValue != "") {
        filterData = filterData.filter(ufo => ufo.state === stateValue);     
    }
    if (countryValue != "") {
        filterData = filterData.filter(ufo => ufo.country === countryValue);     
    }
    if(shapeValue != "") {
        filterData = filterData.filter(ufo => ufo.shape === shapeValue);     
    };
       

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
