// @TODO: YOUR CODE HERE!

//ACTIVITY 16-2-2

// Load data from data.csv
d3.csv("./assets/data/data.csv").then(function(jData) {

    console.log(jData);
});
    // log a list of states
    // var states = jdata.map(data => jdata.state);
// var states = jdata.map(jdata=>jdata.state);
//     console.log("state", state);
  
    // // Cast each hours value in tvData as a number using the unary + operator
    // jData.forEach(function(data) {
    //   data.hours = +data.hours;
    //   console.log("State:", data.state);
    //   console.log("Abbr:", data.abbr);
    // });
//   })    .catch(function(error) {
//     console.log(error);
//   });

//ACTIVITY 16-1-10

// // Dataset we will be using to set the height of our rectangles.
// var booksReadThisYear = [17, 23, 20, 34];

// // Setting the dimensions for the SVG container
// var svgHeight = 600;
// var svgWidth = 400;

// var svg = d3
//   .select("#svg-area")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // svgGroup now refers to the `g` (group) element appended.
// // The SVG group would normally be aligned to the top left edge of the chart.
// // Now it is offset to the right and down using the transform attribute
// var svgGroup = svg.append("g")
//   .attr("transform", "translate(50, 100)");

// // Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
// svgGroup.selectAll("rect")
//   .data(booksReadThisYear)
//   .enter()
//   .append("rect")
//   .attr("width", 50)
//   .attr("height", function(data) {
//     return data * 10;
//   })
//   .attr("x", function(data, index) {
//     return index * 60;
//   })
//   .attr("y", function(data) {
//     return 600 - data * 10;
//   })
//   .attr("class", "bar");

//SCATTER PLOT CODE FROM D3 DOCUMENTATION

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("./assets/data/data.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 50])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 50])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})