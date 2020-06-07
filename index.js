const csvFilePath = "./sample.csv";
const csv = require("csvtojson");
const { mongooseConnect, saveTask } = require("./db/mongoose");

var jsonArray;

async function func() {
  mongooseConnect();
  jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach((data) => saveTask(data));
}

func();

// Year: '2018',
//     Industry_aggregation_NZSIOC: 'Level 4',
//     Industry_code_NZSIOC: 'AA111',
//     Industry_name_NZSIOC: 'Horticulture and Fruit Growing',
//     Units: 'Dollars (millions)',
//     Variable_code: 'H10',
//     Variable_name: 'Indirect taxes',
//     Variable_category: 'Financial performance',
//     Value: '33'
