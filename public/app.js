d3.select("div")
  .selectAll("p")
  .data([1, 2, 3, 4])
  .enter()
  .append("p")
  .text((data) => data);

fetch("data/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
