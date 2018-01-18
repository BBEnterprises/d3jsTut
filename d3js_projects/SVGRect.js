function getMaxVals (rectArray) {
  
  var max_x     = 0,
      max_y     = 0,
      arrLength = rectArray.length;
    
  for (var i = 0; i < arrLength; i++) {
    if (rectArray[i].x_axis + rectArray[i].width > max_x) {
      max_x = rectArray[i].x_axis + rectArray[i].width;
    }
    
    if (rectArray[i].y_axis + rectArray[i].height > max_y) {
      max_y = rectArray[i].y_axis + rectArray[i].height;
    }
  }
  
  return [max_x, max_y];
}

var jsonRectangles = [
  { "x_axis": 10, "y_axis": 10, "height": 20, "width": 20, "color": "green" },
  { "x_axis": 160, "y_axis": 40, "height": 20, "width": 20, "color": "purple" },
  { "x_axis": 70, "y_axis": 70, "height": 20, "width": 20, "color": "red" }
];

var max_x, max_y;

[max_x, max_y] = getMaxVals(jsonRectangles);

var svgContainer = d3.select("body").append("svg")
  .attr("width",  max_x + 20)
  .attr("height", max_y + 20);
  
var rectangles = svgContainer.selectAll("rect")
  .data(jsonRectangles)
  .enter()
  .append("rect");

var rectangleAttributes = rectangles
  .attr("x",      function(d) { return d.x_axis; })
  .attr("y",      function(d) { return d.y_axis; })
  .attr("height", function(d) { return d.height; })
  .attr("width",  function(d) { return d.width;  })
  .style("fill",  function(d) { return d.color;  })
