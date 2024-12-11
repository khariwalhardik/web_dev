const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "myotpgenerator@gmail.com", // Replace with your email
      pass: "kyfc aibs funp ycxf", // Replace with your email password or app password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

// Example email
const mailOptions = {
  from: "myotpgenerator@gmail.com", 
  to: "hardilkhariwal@gmail.com",
  subject: "Test Email",
  text: "Hello! This is a test email from Nodemailer.",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("Error sending email:", err);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
