const nodemailer = require("nodemailer");

const sendEmail = () => {
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
    subject: `feedback from `,
    text: `Hello Pedro: , from: `,
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
