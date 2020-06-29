const myDemo = document.getElementById("demo");
const dataButton = document.querySelector(".data-btn");
const clearButton = document.querySelector(".clear-btn");
let i = 0;

dataButton.addEventListener("click", function () {
  fetchData();
  fetchDataKeys();
  i += 10;
});

clearButton.addEventListener("click", function () {
  myDemo.innerHTML = "";
});

function appendData(elementId, data) {
  let listItem = document.createElement("li");
  listItem.classList.add("listItem");
  listItem.innerHTML = data.Value + " " + data.Variable_name;
  elementId.appendChild(listItem);
}

function fetchData() {
  fetch("data/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (j = i; j < i + 10; j++) {
        appendData(myDemo, data[j]);
      }
      i += 10;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
}

function fetchDataKeys() {
  fetch("data/keys")
    .then(function (response) {
      return response.json();
    })
    .then(function (keys) {
      for (k in keys) {
        console.log(keys[k]);
      }
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
}
