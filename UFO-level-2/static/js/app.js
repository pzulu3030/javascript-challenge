// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
let tbody = d3.select("tbody");
let table = d3.select("table"); // selected the table from html page
table.attr("class", "table table-striped table-hover");

// Capture form input
dateInput = d3.select("#datetime");
countryInput = d3.select("#country");
cityInput = d3.select("#city");
stateInput = d3.select("#state");
shapeInput = d3.select("#shape");

dateInput.on("change", cleanDisplay);
cityInput.on("change", cleanDisplay);
countryInput.on("change", cleanDisplay);
stateInput.on("change", cleanDisplay);
shapeInput.on("change", cleanDisplay);

function cleanDisplay() {
  tbody.html("");
}

tbody.on("change", cleanDisplay);

button = d3.select("#filter-btn");
button.on("click", runHandler);
//Input = d3.select(".form-control");

// Create handlers
function runHandler() {
  dateElement = dateInput.property("value");
  countryElement = countryInput.property("value");
  cityElement = cityInput.property("value");
  stateElement = stateInput.property("value");
  shapeElement = shapeInput.property("value");

  if (dateElement) {
    filteredData = tableData.filter((item) => item.datetime === dateElement);
    console.log(filteredData);
  }
  if (cityElement) {
    filteredData = filteredData.filter((item) => item.city === cityElement);
    console.log(filteredData);
  }
  if (stateElement) {
    filteredData = filteredData.filter((item) => item.state === stateElement);
    console.log(filteredData);
  }
  if (countryElement) {
    filteredData = filteredData.filter(
      (item) => item.country === countryElement
    );
    console.log(filteredData);
  }
  if (shapeElement) {
    filteredData = filteredData.filter((item) => item.shape === shapeElement);

    console.log(filteredData);
  }
  filteredData.forEach(ufoData);
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
