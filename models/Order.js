const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    reference: { type: String, required: true },
    invoice: { type: Number},
    customer: {
      fullName: { type: String, required: true},
      email: { type: String, required: true },
      phone: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      address: { type: String, required: true },
      postcode: { type: String},
    },
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
    amountCharged: { type: Number, required: true },
    currencyPaid: { type: String, default: "USD" },
    exchangeRate: { type: Number, required: true },
    vendor: { type: String, required: true },
    paymentType: { type: String, required: true },
    status: { type: String, default: "pending" },
    responseMessage: { type: String, required: true },
    customer_comment: { type: String, required: false },
    gift_receipt: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
