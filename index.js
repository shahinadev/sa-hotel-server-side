const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(PORT, () => {
  console.log("server is running");
});
