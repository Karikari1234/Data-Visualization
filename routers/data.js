const express = require("express");
const { saveData, Data } = require("../models/data");

const router = new express.Router();

router.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    if (!data) {
      res.status(404).send("Not found");
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("Not found" + error);
  }
});

router.post("/data", async (req, res) => {});

module.exports = router;
