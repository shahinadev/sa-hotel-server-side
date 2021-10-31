const mongoose = require("mongoose");

const { Schema } = mongoose;
const ServiceSchema = new Schema({
  service_name: {
    type: String,
    min: 3,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  service_img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;
