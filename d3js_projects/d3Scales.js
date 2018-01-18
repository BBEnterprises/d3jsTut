var initialScaleData = [
  0,
  1000,
  3000,
  2000,
  5000,
  4000,
  7000,
  6000,
  9000,
  8000,
  10000
],

  newScaledData = [],
  minDataPoint  = d3.min(initialScaleData);
  maxDataPoint  = d3.max(initialScaleData);
  linearScale   = d3.scale.linear()
    .domain([minDataPoint, maxDataPoint])
    .range([0,100]);
    
for (var i = 0; i < initialScaleData.length; i++) {
  newScaledData[i] = linearScale(initialScaleData[i]);
}

newScaledData;