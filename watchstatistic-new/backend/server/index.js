const express = require("express");
const { sendEmail } = require("./email");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/start", (req, res) => {
  res.json({ message: "Welcome to the watchstatistics backend!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

sendEmail();
