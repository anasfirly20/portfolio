import http from "http";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
});

// transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasfirly20@gmail.com",
    pass: "mpnffvvzoudzxibe",
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// // TESTERR
let mailDetails = {
  from: "anasfirly20@gmail.com",
  to: "anasfirly7@hotmail.com",
  subject: "How to send email using Nodemailer",
  text: "Testing nodemailer for Belinsky Contact Us Page",
  html: "<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>",
  amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`,
};

transporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});

// app.post("/send", (req, res, next) => {
//   var name = req.body.name;
//   var email = req.body.email;
//   var subject = req.body.subject;
//   var message = req.body.message;

//   var mail = {
//     from: name,
//     to: "anasfirly7@hotmail.com",
//     subject: subject,
//     text: message,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

server.listen(3000, "127.0.0.1");
