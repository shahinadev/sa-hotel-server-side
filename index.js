const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(port, () => {
  console.log("server is running");
});
