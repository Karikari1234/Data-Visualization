const csvFilePath = "./sample.csv";
const csv = require("csvtojson");

const jsonArray = await csv().fromFile(csvFilePath);

var i;
for (i = 0; i < 1; i++) {
  console.log(jsonArray[i]);
}