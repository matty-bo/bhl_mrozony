const measurements = require("./data/measurements");

const getWaterMeterData = (waterMeterID, dateFilterInfo) => {
  let data = measurements.mockData;
  let dataArray = Object.values(data);

  dataArray = dataArray.filter((entry) => entry.waterMeterID == waterMeterID);
  console.log(dateFilterInfo);
  if (dateFilterInfo.year)
    dataArray = dataArray.filter((entry) => {
      let y = new Date(entry.date).getFullYear();
      return y == dateFilterInfo.year;
    });

  if (dateFilterInfo.month)
    dataArray = dataArray.filter((entry) => {
      let m = new Date(entry.date).getMonth() + 1;
      return m == dateFilterInfo.month;
    });
  if (dateFilterInfo.day)
    dataArray = dataArray.filter((entry) => {
      let d = new Date(entry.date).getDate();
      return d == dateFilterInfo.day;
    });
  return dataArray;
};

module.exports = {
  getWaterMeterData: (waterMeterID, dateFilterInfo) =>
    getWaterMeterData(waterMeterID, dateFilterInfo),
};
