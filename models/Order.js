const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true },
    reference: { type: String, required: true },
    invoice: { type: Number},
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
      },
    ],
    itemTotal: { type: Number, required: true },
    shipping: { type: Number, required: true },
    discount: { type: Number, required: true },
    tax: { type: Number, required: true },
    currencyPaid: { type: String, default: "USD" },
    exchangeRate: { type: Number, required: true },
    vendor: { type: String, required: true },
    paymentType: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
