const myDemo = document.getElementById("demo");
const dataButton = document.querySelector(".data-btn");
const clearButton = document.querySelector(".clear-btn");
const selectx = document.getElementById("x-axis");
const selecty = document.getElementById("y-axis");
let i = 0;
let s_flag = 0;
fetchDataKeys();
dataButton.addEventListener("click", function () {
  fetchData();

  i += 10;
});

clearButton.addEventListener("click", function () {
  s_flag = 0;
  myDemo.innerHTML = "";
});

function appendData(elementId, data) {
  if (!s_flag) {
    let listItem = document.createElement("li");
    listItem.classList.add("listItem");
    listItem.innerHTML = selectx.value + "        " + selecty.value;
    elementId.appendChild(listItem);
    s_flag = 1;
  }
  let listItem = document.createElement("li");
  listItem.classList.add("listItem");
  listItem.innerHTML = data[selectx.value] + "       " + data[selecty.value];
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
        selectx.options[selectx.options.length] = new Option(keys[k], keys[k]);
        selecty.options[selecty.options.length] = new Option(keys[k], keys[k]);
      }
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
}
