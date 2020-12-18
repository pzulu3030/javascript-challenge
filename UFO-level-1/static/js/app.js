// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");
let table = d3.select("table"); // selected the table from html page
table.attr("class", "table table-striped table-hover");

function ufoData(item) {
  let row = tbody.append("tr");
  row.append("td").text(item.datetime);
  row.append("td").text(item.city);
  row.append("td").text(item.state);
  row.append("td").text(item.country);
  row.append("td").text(item.shape);
  row.append("td").text(item.durationMinutes);
  row.append("td").text(item.comments);
}

tableData.forEach(ufoData);
