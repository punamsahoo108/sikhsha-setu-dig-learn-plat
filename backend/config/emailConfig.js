const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "punamsahook@gmail.com",
    pass: "yunkpghxdtxftath",
  },
});

module.exports = transporter;
