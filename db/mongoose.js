const mongoose = require("mongoose");

async function mongooseConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/newDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}

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

async function saveTask(jsonArray) {
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
  mongooseConnect,
  saveTask,
};
