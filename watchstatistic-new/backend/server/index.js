const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/start", (req, res) => {
  res.json({ message: "Welcome to the watchstatistics backend!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.KEY_EMAIL,
  },
});

const mailOptions = {
  from: "pedrogilsenarego@gmail.com",
  to: "pedrogilsenarego@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
