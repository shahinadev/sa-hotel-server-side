const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const dotenv = require("dotenv");
const router = require("./routers/allapis");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//database
mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    console.log("db connected successfully..");
  })
  .catch((err) => console.log("error:", err));
//get all rooms
app.use(router);

//root route
app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(port, () => {
  console.log("server is running");
});
