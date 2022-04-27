const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true},
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    postcode: { type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
