const Customer = require("../models/Customer");
const Order = require("../models/Order");

const router = require("express").Router();


router.post("/add_customer", async (req, res) => {
    const newCustomer = new Customer(req.body); 
    try {
      const savedCustomer = await newCustomer.save();
      res.status(200).json(savedCustomer);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post("/add_order", async (req, res) => {
    const newOrder = new Order(req.body); 
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;