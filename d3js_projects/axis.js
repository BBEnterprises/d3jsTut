var svgContainer = d3.select("body").append("svg")
  .attr("width", 400)
  .attr("ehight", 100)

var axisScale = d3.scaleLinear()
  .domain([0,100])
  .range([0,400]);

var xAxis = d3.axisBottom()
  .scale(axisScale);
  
var xAxisGroup = svgContainer.append("g")
  .call(xAxis);
  
