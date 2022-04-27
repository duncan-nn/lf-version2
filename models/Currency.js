const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    code: { type: String, required: true },
    symbol: { type: String, required: true },
    rate: { type: Number, required: true },
    countryName: { type: String, required: true },
    countryCode: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Currency", CurrencySchema);
