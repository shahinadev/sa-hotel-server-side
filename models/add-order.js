const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
  service_id: {
    type: String,
    required: true,
  },
  service_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  room_count: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
