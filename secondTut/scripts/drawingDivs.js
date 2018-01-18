var dataSet = [ 5, 10, 15, 20, 25 ];

d3.select("body").selectAll("div")
  .data(dataSet)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("width", "20px")
  .style("height", function (d) {
    var barHeight = d * 5;
    return barHeight + "px";
  })
  .style("background-color", "teal")
  .style("display", "inline-block")
  .style("margin-right", "2px");