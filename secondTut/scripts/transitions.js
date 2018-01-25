function randSet () {
  var dataset = [];
  var numDataPoints = 30;
  var value = Math.random() * 1000;
  for (var i = 0; i < numDataPoints; i++) {
    var Number1 = Math.round(Math.random() * value);
    dataset.push(Number1);
  }
  
  return dataset;
}

function createBar (dataset) {
  var w        = 600,
      h        = 300,
      chartPad = 30,
      barPad   = 5,
      barWidth = w / dataset.length - barPad;
  
  var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([h - barPad, chartPad]);
  
  var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
  
  var yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(5);
        
  var rectangles = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return i * (w / dataset.length) + chartPad;
    })
    .attr("y", function (d) { return h - yScale(d) })
    .attr("width", w / dataset.length - barPad)
    .attr("height", function (d) { return yScale(d) })
    .attr("fill", "teal");
    
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + chartPad + ",0)")
    .call(yAxis);
    
    return {
      "svg"    : svg,
      "w"      : w,
      "h"      : h,
      "yScale" : yScale
    };
}

var barChart = createBar(randSet());

barChart = createBar(randSet())
  .transition()
  .delay(750);
  

