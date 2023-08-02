const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true },
    categories: { type: Array, required: true },
    size: { type: Array, required: true},
    colors: [
      {
        id: {
          type: String,
          required: false,
        },
        name: {
          type: String,
          required: false,
        },
        code: {
          type: String,
          required: false,
        },
      },
    ],
    prices: {
      USD: {
        type: Number,
        required: true,
      },
      NGN: {
        type: Number,
        required: true,
      },
      GBP: {
        type: Number,
        required: true,
      },
      EUR: {
        type: Number,
        required: true,
      },
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
