var dataSet = [ 5, 10, 15, 20, 25 ];

var svgContainer = d3.select("body").append("svg")
  .attr("width", dataSet.length * 16)
  .attr("height", 400);

var bars = svgContainer.selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect");

var axisScale = d3.scaleLinear()
  .domain([
    d3.max(d3.values(dataSet)),
    0
  ])
  .range([0,100]);

var yAxis = d3.axisRight()
  .scale(axisScale);
  
var axisGroup = svgContainer.append("g")
  .call(yAxis);

var xCord = 0,
    yCord = 100;

var barAttributes = bars
  .attr("y", function (d) { return 101 - d})
  .attr("x", function () {
    var returnVal = xCord;
    xCord = xCord + 16;
    return returnVal;
  })
  .attr("height", function (d) { return d})
  .attr("width", 15)
  .style("fill", "red")
