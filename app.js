d3.select("div")
  .selectAll("p")
  .data([1, 2, 3, 4])
  .enter()
  .append("p")
  .text((data) => data);