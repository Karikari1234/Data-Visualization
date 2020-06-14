const csvFilePath = "./sample.csv";
const csv = require("csvtojson");
const { mongooseConnect } = require("./db/mongoose");
const { saveData, Data } = require("./models/data");
const express = require("express");
const path = require("path");
const dataRouter = require("./routers/data");

const app = express();

const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));
app.use(dataRouter);

mongooseConnect();
async function func() {
  let jsonArray;
  jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach((data) => saveData(data));
}

module.exports = {
  app,
};
