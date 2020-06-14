const myDemo = document.getElementById("demo");

fetch("data/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (i in data) {
      if (i < 10) appendData(myDemo, data[i]);
    }
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

function appendData(elementId, data) {
  let listItem = document.createElement("li");
  listItem.classList.add("listItem");
  listItem.innerHTML = data.Value + " " + data.Variable_name;
  elementId.appendChild(listItem);
}
