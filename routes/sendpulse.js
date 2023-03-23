const router = require("express").Router();

const sendpulse = require("sendpulse-api");

const USER_ID = process.env.SENDPULSE_USER_ID;
const KEY = process.env.SENDPULSE_SECRET;
const TOKEN_STORAGE="/tmp/";


  // Add Email //

  router.post("/", async (req, res) => {
    //console.log(req.body.email);
    // console.log(req.body.name);  
    try {
        sendpulse.init(USER_ID, KEY, TOKEN_STORAGE, function(token) {
            if (token && token.is_error) {
                // error handling
                console.log('your token: Error');
            }       
            //console.log('your token: ' + token);
            var answerGetter = function(data) {
              console.log(data);
            }
            sendpulse.addEmails(answerGetter, 433388, [{email:req.body.email, variables:{}}]);
            //sendpulse.addEmails(answerGetter, 433388, [{email:req.body.email, variables:{"name":req.body.name}}]);
            //sendpulse.listAddressBooks(answerGetter);
        });
    } catch (err) {
    }
  });

    // Send Email //

    router.post("/send_email", async (req, res) => {

      //console.log(req.body);
      
      
      var currentdate = new Date(); 

      var htmlMsg = `<!DOCTYPE html>
      <html lang="en"><head>
        <title> You got a new Notification  </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          #outlook a {
            padding: 0;
          }
      
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
      
          table,
          td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
      
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
      
          p {
            display: block;
            margin: 13px 0;
          }
        </style>
        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }
          }
        </style>
        <style type="text/css">
          @media only screen and (max-width:480px) {
            table.mj-full-width-mobile {
              width: 100% !important;
            }
      
            td.mj-full-width-mobile {
              width: auto !important;
            }
          }
        </style>
        <style type="text/css">
          a,
          span,
          td,
          th {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
        </style>
      </head>
      
      <body style="background-color:#ffffff;">
        <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">You have a new notification regarding your website's contact form. </div>
        <div style="background-color:#ffffff;">
      
          <div style="margin:0px auto;max-width:600px;">
            <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
      
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <table role="presentation" style="border-collapse:collapse;border-spacing:0px;" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:50px;">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;"> You got a new <br /> Notification </h1>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
          <div style="margin:0px auto;max-width:600px;">
            <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
      
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;">Hi, Lisa</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;">You have a new notification regarding your website's contact form.</p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
          <div style="margin:0px auto;max-width:600px;">
            <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
      
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">When:</strong><br />${currentdate.toLocaleString()}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Guest Name:</strong><br />${req.body.firstname + " " + req.body.lastname}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Contact:</strong><br />${req.body.phone + " " + req.body.email}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Purpose:</strong><br />${req.body.subject}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Comment:</strong><br />${req.body.comment}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
      
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
          <div style="margin:0px auto;max-width:600px;">
            <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0px;text-align:center;">
      
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">If you need any help, don’t hesitate to reach out to us at <a href='mailto:info@infusedigitals.com.ng' style="color: #2e58ff; text-decoration: none;">info@infusedigitals.com.ng</a>!</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">Team Infuse</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
      
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
      
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
          <div style="margin:0px auto;max-width:600px;">
            <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0;text-align:center;">
      
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <p style="border-top: dashed 1px lightgrey; font-size: 1px; margin: 0px auto; width: 100%;">
                            </p>
      
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#999999;">Have questions or need help? Email us at <a href='mailto:info@infusedigitals.com.ng' style="color: #2e58ff; text-decoration: none;">info@infusedigitals.com.ng</a></div>
                          </td>
                        </tr>
      
                      </tbody></table>
                    </div>
      
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
          <div style="margin:0px auto;max-width:600px;">
            <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
      
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;word-break:break-word;">
      
                            <div style="height:1px;">   </div>
      
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
      
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
        </div>
      
      
      </body></html>`;

      var textMsg = ` Hi, Lisa You have a new notification regarding your website's contact form. 
                  when: ${currentdate.toLocaleString()}.
                  Guest Name: ${req.body.firstname + " " + req.body.lastname}.
                  Contact: ${req.body.phone + " " + req.body.email}.
                  Purpose: ${req.body.subject}.
                  Comment: ${req.body.comment}.
                `;

      var email = {
        "html" : htmlMsg,
        "text" : textMsg,
        "subject" : "Guest Enquiry - LF Website Contact Form",
        "from" : {
          "name" : "Lisafolawiyo",
          "email" : "info@lisafolawiyo.com"
        },
        "to" : [
          {
            "name" : "Admin",
            "email" : "info@lisafolawiyo.com"
          },
        ]
      };
        
      try {

        sendpulse.init(USER_ID, KEY, TOKEN_STORAGE, function(token) {
            if (token && token.is_error) {
                // error handling
                console.log('your token: Error');
            }       
           // console.log('your token: ' + token);
            var answerGetter = function(data) {
              console.log(data);
            }

           sendpulse.smtpSendMail(answerGetter,email);
        });
      } catch (err) {

      }

    });


  module.exports = router;