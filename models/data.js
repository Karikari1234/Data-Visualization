const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Year: {
    type: String,
    required: true,
    trim: true,
  },
  Industry_aggregation_NZSIOC: {
    type: String,
    required: true,
    trim: true,
  },
  Industry_code_NZSIOC: {
    type: String,
    required: true,
    trim: true,
  },
  Industry_name_NZSIOC: {
    type: String,
    required: true,
    trim: true,
  },
  Units: {
    type: String,
    required: true,
    trim: true,
  },
  Variable_code: {
    type: String,
    required: true,
    trim: true,
  },
  Variable_name: {
    type: String,
    required: true,
    trim: true,
  },
  Variable_category: {
    type: String,
    required: true,
    trim: true,
  },
  Value: {
    type: String,
    required: true,
    trim: true,
  },
});

const Data = mongoose.model("Data", dataSchema);

async function saveData(jsonArray) {
  const newData = new Data({
    ...jsonArray,
  });
  try {
    await newData.save();
    console.log("done");
  } catch (error) {
    console.log("Not possible");
  }
}

module.exports = {
  saveData,
  Data,
};
