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
