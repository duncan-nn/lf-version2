const router = require("express").Router();

const sendpulse = require("sendpulse-api");

const USER_ID = process.env.SENDPULSE_USER_ID;
const KEY = process.env.SENDPULSE_SECRET;
const TOKEN_STORAGE="/tmp/";


  // Add Email //

  router.post("/", async (req, res) => {
    // console.log(req.body.email);
    // console.log(req.body.name);
      
    try {
        sendpulse.init(USER_ID, KEY, TOKEN_STORAGE, function(token) {
            if (token && token.is_error) {
                // error handling
                console.log('your token: Error');
            }       
            //console.log('your token: ' + token);
            var answerGetter = function(data) {
              //`console`.log(data);
            }
            sendpulse.addEmails(answerGetter, 433388, [{email:req.body.email, variables:{}}]);
            //sendpulse.addEmails(answerGetter, 433388, [{email:req.body.email, variables:{"name":req.body.name}}]);
            //sendpulse.listAddressBooks(answerGetter);
        });

    } catch (err) {
    }
  });


  module.exports = router;