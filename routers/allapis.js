const Service = require("../models/add-service");
const router = require("express").Router();
const Booking = require("../models/add-order");
//get all services api
router.get("/services", async (req, res) => {
  try {
    const result = await Service.find({});
    res.json(result);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//add a new service api
router.post("/add-service", async (req, res) => {
  const data = req.body;
  try {
    const doc = new Service(data);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//get single service by id api
router.get("/services/:id", async (req, res) => {
  const { id } = req.params;
  //get id form params
  try {
    const result = await Service.findById(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

//save booking / order
router.post("/add-order", async (req, res) => {
  const data = req.body;
  try {
    const doc = new Booking(data);
    const result = await doc.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//get all orders by user email api

router.get("/orders", async (req, res) => {
  if (req.query.length > 0) {
    const { email } = req.query;
    try {
      const result = await Booking.find({ email });
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  } else {
    const result = await Booking.find({});
    res.json(result);
  }
});

//delete single order api
router.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Booking.deleteOne({ _id: id });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

//update order status api
router.put("/orders/", async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Booking.findByIdAndUpdate(id, {
      status: "approved",
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
