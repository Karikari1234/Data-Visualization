const express = require("express");
const { getDataKeys,saveData, Data } = require("../models/data");

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

router.get("/data/keys",async (req,res) => {
  try{
    const keys = getDataKeys();
    if (!keys) {
      res.status(404).send("Keys not found");
    }
    res.status(200).send(keys);
  }catch(error){
    res.status(404).send("Keys Not found" + error);
  }
})

router.post("/data", async (req, res) => {});

module.exports = router;
