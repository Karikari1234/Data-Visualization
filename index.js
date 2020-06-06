const csvFilePath = "./sample.csv";
const csv = require("csvtojson");

var jsonArray;
async function func() {
  jsonArray = await csv().fromFile(csvFilePath);
  console.log(jsonArray);
}

func();

console.log("hello");
