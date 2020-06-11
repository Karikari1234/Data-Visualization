const csvFilePath = "./sample.csv";
const csv = require("csvtojson");
const { mongooseConnect } = require("./db/mongoose");
const { saveData, Data } = require("./models/data");
const express = require("express");
const path = require("path");

const app = express();

var jsonArray;

mongooseConnect();
async function func() {
  jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach((data) => saveData(data));
}

//func();
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    if (!data) {
      console.log("notfound");
      res.status(404).send("Not found");
    }
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(404).send("Not found");
  }
});

app.listen(3000, () => {
  console.log("Server up and running");
});
