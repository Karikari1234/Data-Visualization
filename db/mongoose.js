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

module.exports = {
  mongooseConnect,
};
