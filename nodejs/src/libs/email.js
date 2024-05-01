require("dotenv").config();
const nodemailer = require("nodemailer");

function getTransporter() {
  const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  return transporter;
}

function sendEmail({
  senderName = "",
  to,
  subject,
  text = "",
  attachments = [],
}) {
  const transporter = getTransporter();
  const mailOptions = {
    from: `${senderName}<${process.env.NODEMAILER_USER}>`,
    to,
    subject,
    text,
    attachments,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email send : " + info.response);
    }
  });
}

function sendHtmlEmail({
  senderName = "",
  to,
  subject,
  html = "",
  attachments = [],
}) {
  const transporter = getTransporter();
  const mailOptions = {
    from: `${senderName}<${process.env.NODEMAILER_USER}>`,
    to,
    subject: `${subject}`,
    html,
    attachments,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email send : " + info.response);
    }
  });
}

module.exports = {
  sendEmail,
  sendHtmlEmail,
};
