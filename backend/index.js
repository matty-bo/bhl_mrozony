const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const corsOptions = {
  origin: "*",
};

app.get("/", (req, res) => {
  res.send("Lubię wodociągi :)");
});

app.get("/user/place", (req, res) => {});

app.get("/watermeter/:waterMeterID", (req, res) => {
  const queryParams = req.query;

  const waterMeterID = req.params.waterMeterID;
  const dateFilterInfo = {
    year: queryParams?.year,
    month: queryParams?.month,
    day: queryParams?.day,
  };

  const data = db.getWaterMeterData(waterMeterID, dateFilterInfo);
  return res.json(data);
});

app.listen(2137);
