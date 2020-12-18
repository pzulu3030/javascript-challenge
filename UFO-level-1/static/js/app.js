// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
let table = d3.select("table"); // selected the table from html page
table.attr("class", "table table-striped table-hover");

// Capture form input
button = d3.select("#filter-btn");
button.on("click", runHandler);
formInput = d3.select(".form-control");
//formInput = d3.select(".form-control");
//document.querySelector("#filter-btn").addEventListener("click", runHandler);

// Create handlers

function runHandler() {
  //console.log(document.querySelector(".form-control").value);
  inputElement = formInput.property("value");
  console.log(inputElement);
  if (!inputElement) {
    tableData.forEach(ufoData);
  } else {
    filteredData = tableData.filter((item) => item.datetime === inputElement);
    filteredData.forEach(ufoData);
  }
}

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
