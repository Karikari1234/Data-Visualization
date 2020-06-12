d3.select("div")
  .selectAll("p")
  .data([1, 2, 3, 4])
  .enter()
  .append("p")
  .text((data) => data);
var sampleData;
const myDemo = document.getElementById("demo");
fetch("data/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    sampleData = data;
    console.log("Success");
    var count = 0;
    for (data in sampleData) {
      if (data <= 10) {
        let listItem = document.createElement("li");
        listItem.classList.add("listItem");
        listItem.innerHTML =
          sampleData[data].Value + " " + sampleData[data].Variable_name;
        myDemo.appendChild(listItem);
        console.log(data);
      } else {
      }
    }
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
