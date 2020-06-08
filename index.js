const csvFilePath = "./sample.csv";
const csv = require("csvtojson");
const { mongooseConnect } = require("./db/mongoose");
const { saveData } = require('./models/data')

var jsonArray;

async function func() {
  mongooseConnect();
  jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach((data) => saveData(data));
}

func();
