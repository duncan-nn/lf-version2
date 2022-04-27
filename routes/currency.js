const Currency = require("../models/Currency");

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");

const router = require("express").Router();


router.post("/add_currency", async (req, res) => {
    const newCurrency= new Currency(req.body); 
    try {
      const savedCurrency= await newCurrency.save();
      res.status(200).json(savedCurrency);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET CURRENCY
router.get("/find/:id", async (req, res) => {
  try {
    const currency = await Currency.findById(req.params.id);
    res.status(200).json(currency);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;