const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const checkoutRoute = require("./routes/checkout");
const currencyRoute = require("./routes/currency");
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");


mongoose
  .connect("mongodb+srv://lf_admin1:M0RefzwZobE8ZTvM@cluster0.8bb6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

app.use("/api/checkout", checkoutRoute);
app.use("/api/currency", currencyRoute);

app.listen(80, () => {
  console.log("Backend server is running!");
});


// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend server is running!");
// });
