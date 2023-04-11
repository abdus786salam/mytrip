const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { travellerRouter } = require("./routes/traveller.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/mytrip", travellerRouter);

app.get("/", (req, res) => {
  res.send("welcome to data base of Plan my trip app");
});
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (err) {
    console.log("db not connected");
    console.log(err);
  }
  console.log(`app running at http://localhost:${process.env.port}`);
});
