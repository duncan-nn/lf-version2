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

    // Send Email ///

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

    // Send Customer Email Receipt //

    router.post("/send_customer_receipt", async (req, res) => {

      console.log(req.body);
      
      
      var currentdate = new Date(); 

      var productsHTML = ``;
      req.body.products.map((product) => (
        productsHTML += `<div style="background:#fcfcfc;background-color:#fcfcfc;margin:0px auto;max-width:550px;">
          <table role="presentation" style="background:#fcfcfc;background-color:#fcfcfc;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">

                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">

                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                              <p style="margin: 0;">${product.productName}</p>
                              <p style="margin: 0;text-transform:uppercase;"> <small>${product.size}</small></p>
                              <p style="margin: 0;"> <small>Qty: ${product.quantity}</small></p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>

                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody><tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="right">
                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:right;color:#434245;">
                              <p style="margin: 0;">${req.body.currencyPaid} ${product.price}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>

                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>`
                          
      ));

      var htmlMsg = `<!DOCTYPE html>
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head>
            <title>Your Receipt - Lisafolawiyo</title>
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
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
            <style type="text/css">
              @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
            </style>

            <style type="text/css">
              @media only screen and (min-width:480px) {
                .mj-column-per-100 {
                  width: 100% !important;
                  max-width: 100%;
                }

                .mj-column-per-50 {
                  width: 50% !important;
                  max-width: 50%;
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
            <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Your Receipt </div>
            <div style="background-color:#ffffff;">

              <div style="margin:0px auto;max-width:600px;">
                <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">

                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody><tr>
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                                <table role="presentation" style="border-collapse:collapse;border-spacing:0px;" cellspacing="0" cellpadding="0" border="0">
                                  <tbody>
                                    <tr>
                                      <td style="width:130px;">
                                        <img alt="Logo" src="https://lisafolawiyo.com/email_images/lf_logo_blk.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">

                                <div style="height:20px;">   </div>

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
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                                <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;line-height:32px;text-align:center;color:#434245;">
                                  <h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">${req.body.gift_receipt == true? "Gift Receipt" : "Receipt"}</h1>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                  <p style="margin: 0;">Thank you for your order! A record of your purchase information appears below. Please keep this email as the confirmation of your order. </p>
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
                      <td style="direction:ltr;font-size:0px;padding:0 25px;text-align:center;">

                        <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
                          <table role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                              <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody><tr>
                                        <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                          <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:22px;text-align:left;color:#434245;">
                                            <h3 style="margin: 0; font-weight: bold;">Items Ordered</h3>
                                            <p style="margin: 0;"><small>Date: ${currentdate.toLocaleString()}</small></p>
                                            <p style="margin: 0;"><small>Invoice Number: ${req.body.invoice}</small></p>
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

                        ${productsHTML}

                        <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
                          <table role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                              <tr>
                                <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">

                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">

                                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                              <p style="margin: 0;"><small>Discount</small></p>
                                              <p style="margin: 0;"><small>Shipping</small></p>
                                              <p style="margin: 0;"><small>Tax</small></p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </div>

                                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="right">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:right;color:#434245;">
                                              <p style="margin: 0;"><small>${req.body.currencyPaid} ${req.body.discount}</small></p>
                                              <p style="margin: 0;"><small>${req.body.currencyPaid} ${req.body.shipping}</small></p>
                                              <p style="margin: 0;"><small>${req.body.currencyPaid} ${req.body.tax}</small></p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </div>

                                  </div>

                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div style="background:#fcfcfc;background-color:#fcfcfc;margin:0px auto;max-width:550px;">
                          <table role="presentation" style="background:#fcfcfc;background-color:#fcfcfc;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                              <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">

                                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">
                                              <p style="margin: 0;">Total</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </div>

                                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="right">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:right;color:#434245;">
                                              <p style="margin: 0;">${req.body.currencyPaid} ${req.body.amountCharged}</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </div>

                                  </div>
          
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
                          <table role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                              <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">

                                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:22px;text-align:left;color:#434245;">
                                              <h3 style="margin: 0; font-weight: bold;">Billing Info</h3>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:left;color:#999999;">
                                              <p style="margin: 0;">${req.body.customer.fullName}<br /> ${req.body.customer.address} <br /> ${req.body.customer.city}<br /> ${req.body.customer.postcode}<br /> ${req.body.customer.country}<br />
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </div>

                                    <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                                      <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="right">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:22px;text-align:right;color:#434245;">
                                              <h3 style="margin: 0; font-weight: bold;">Shipping address</h3>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="right">
                                            <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:right;color:#999999;">
                                            <p style="margin: 0;">${req.body.customer.fullName}<br /> ${req.body.customer.address} <br /> ${req.body.customer.city}<br /> ${req.body.customer.postcode}<br /> ${req.body.customer.country}<br />
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </div>

                                  </div>

                                </td>
                              </tr>
                            </tbody>
                          </table>
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

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <table role="presentation" style="background:#fafafa;background-color:#fafafa;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>

                      <div style="margin:0px auto;max-width:600px;">
                        <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

                                <div style="margin:0px auto;max-width:600px;">
                                  <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                      <tr>
                                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

                                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                            <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody><tr>
                                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">

                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                                <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">If you need help, reply to <a class="footer-link" href="https://mailto:info@lisafolawiyo.com" style="color: #2e58ff; text-decoration: none;">info@lisafolawiyo.com</a> or visit our <a href="https://lisafolawiyo.com/shop/faq" class="footer-link" style="color: #2e58ff; text-decoration: none;"> FAQs </a></div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                                                  <div style="font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:20px;text-align:center;color:#bfbfbf;">© Jewel By Lisa. All Rights Reserved.</div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="font-size:0px;word-break:break-word;">

                                                  <div style="height:20px;">   </div>

                                                </td>
                                              </tr>
                                            </tbody></table>
                                          </div>

                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </body></html>`;

      var textMsg = "Receipt - Lisafolawiyo";

      var email = {
        "html" : htmlMsg,
        "text" : textMsg,
        "subject" : req.body.gift_receipt == true? "Gift Receipt" : "Receipt",
        "from" : {
          "name" : "Lisafolawiyo",
          "email" : "info@lisafolawiyo.com"
        },
        "to" : [
          {
            "name" : req.body.customer.fullName,
            "email" : req.body.customer.email
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


        // Send admin notification for order //

        router.post("/send_admin_notice_email", async (req, res) => {

          console.log(req.body);
          
          
          var currentdate = new Date(); 
    
          var htmlMsg = `<!DOCTYPE html>
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head>
            <title>New Order - Lisafolawiyo</title>
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
            <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> You have a new order - Lisafolawiyo </div>
            <div style="background-color:#ffffff;">
          
              <div style="margin:0px auto;max-width:600px;">
                <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
          
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                            <tr>
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                  <h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;"> You have a new order<br /> on your website.</h1>
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
                                  <p style="margin: 0;">You have a new order on your website. Below is the order summary. You can see the full order details from your admin dashboard.</p>
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
                                  <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Customer Name:</strong><br /> ${req.body.customer.fullName}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                  <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Customer Email:</strong><br /> ${req.body.customer.email}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                  <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Customer Location:</strong><br /> ${req.body.customer.city}, ${req.body.customer.country}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                                  <p style="margin: 0;"><strong style="font-size: 14px; color: #999; line-height: 18px">Amount Paid:</strong><br /> ${req.body.currencyPaid} ${req.body.amountCharged}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                <table role="presentation" style="border-collapse:separate;line-height:100%;" cellspacing="0" cellpadding="0" border="0">
                                  <tbody><tr>
                                    <td role="presentation" style="border:none;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px;background:#2e58ff;" valign="middle" bgcolor="#2e58ff" align="center">
                                      <a href="https://admin.lisafolawiyo.com" style="display: inline-block; background: #2e58ff; color: #ffffff; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 30px; margin: 0; text-decoration: none; text-transform: uppercase; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 30px;" target="_blank">
                                         See full order detail <strong>- Login to dashboard</strong></a>
                                    </td>
                                  </tr>
                                </tbody></table>
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
          
            </div>
          
          
          </body></html>`;
    
          var textMsg = "Hello, you have an order";
    
          var email = {
            "html" : htmlMsg,
            "text" : textMsg,
            "subject" : "Hello, You have an order",
            "from" : {
              "name" : "Lisafolawiyo",
              "email" : "info@lisafolawiyo.com"
            },
            "to" : [
              {
                "name" : "Lisafolawiyo",
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