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
const customerRoute = require("./routes/customer");
const checkoutRoute = require("./routes/checkout");
const currencyRoute = require("./routes/currency");
const sendPulseRoute = require("./routes/sendpulse");
const cors = require("cors");


// mongoose
//   .connect("mongodb+srv://lf_admin1:M0RefzwZobE8ZTvM@cluster0.8bb6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
//   .then(() => console.log("DB Connection Successfull!"))
//   .catch((err) => {
//     console.log(err);
//   });
mongoose
  .connect(process.env.LF_MONGO_URL)
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
app.use("/api/customers", customerRoute);
app.use("/api/checkout", checkoutRoute);
app.use("/api/currency", currencyRoute);
app.use("/api/sendpulse", sendPulseRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
