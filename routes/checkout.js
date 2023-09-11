const Customer = require("../models/Customer");
const Order = require("../models/Order");
const router = require("express").Router();
const axios = require('axios');

const http = require("http");


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


//Verify Paystack Transaction
router.get("/paystack_verify/:ref", async (req, res) => {
  // try {
  //   console.log("paystack verify: " , req.params.ref);
  //   var request = require('request');
  //   request('http://www.yoururl.com/verify_transaction?reference='+ req.params.ref, function (error, response, body) {
  //       if (!error && response.statusCode === 200) {
  //           console.log(body) // Print the google web page.
  //       }
  //   })
  // } catch (err) {

  // }
  console.log("paystack verify: " , req.params.ref);
  // const url = 'http://www.yoururl.com/verify_transaction?reference='+ req.params.ref;
  // var req = http.request(url, res=>{
  //   console.log(res.data.status);
  // });
  // req.end();
  let output;
  await axios.get(`https://api.paystack.co/transaction/verify/${req.params.ref}`, {
    headers: {
      Authorization: "Bearer sk_live_9e932143bd61e696bae5e4421730069bca3557db",
      //replace TEST SECRET KEY with your actual test secret 
      //key from paystack
      "content-type": "application/json",
      "cache-control": "no-cache",
    }, }).then((success)=>{
      output = success;
      //console.log(success);
  }).catch((error)=>{
    output = error;
    //console.log(error);
  });
  //now we check for internet connectivity issues
  if(!output.response && output.status!==200){
    console.log("No internet Connection");
  }
  //next,we confirm that there was no error in verification.
  if(output.response && !output.response.data.status) {
    console.log( "Error verifying payment , 'unknown Transaction Reference Id'");
  }
  console.log(output.data.status);
  res.status(200).send(output.data);
    

});


// callback: function(response){

//   $.ajax({

//     url: 'http://www.yoururl.com/verify_transaction?reference='+ response.reference,

//     method: 'get',

//     success: function (response) {

//       // the transaction status is in response.data.status

//     }

//   });

// }

module.exports = router;