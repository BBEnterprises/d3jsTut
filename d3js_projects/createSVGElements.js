var circleRadii = [40, 20, 10],
    svgContainer = d3.select("body").append("svg")
      .attr("width", 200)
      .attr("height", 200);

var circles = svgContainer.selectAll("circle")
      .data(circleRadii)
      .enter()
      .append("circle");

var circleAttributes = circles
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("r", function (d) { return d; })
		.style("fill", function (d) {
        var returnColor;
        if (d == 40) { returnColor = "green"; }
        else if ( d == 20) { returnColor = "purple"; }
        else if ( d == 10) { returnColor = "red"; }
        return returnColor;
      }
    );
