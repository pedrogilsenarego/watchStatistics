const nodemailer = require("nodemailer");

const sendEmail = (userEmail, userName, message) => {
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
    subject: `feedback from ${userName}`,
    text: `Hello Pedro: ${message}, from: ${userName}- ${userEmail}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmail };
