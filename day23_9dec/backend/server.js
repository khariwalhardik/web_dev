const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const axios = require("axios");  // Add this line for Axios
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/usersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// User Schema
//import schema from "./models/User";
const User = require("./models/User");



// OTP Schema
const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const OTP = mongoose.model("OTP", otpSchema);

//verify document schema
const verifySchema = new mongoose.Schema({
  email: { type: String, required: true },
  otpSessionId: { type: String, required: true },
});

const VERIFY = mongoose.model("VERIFY", verifySchema);

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Sign-Up Route
app.post("/api/signup", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const user = new User({ name, email, phone });
    await user.save();

    const otp = Math.floor(1000 + Math.random() * 9000);

    // Save OTP to MongoDB
    const otpEntry = new OTP({ email, otp });
    await otpEntry.save();

    // Send OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending OTP." });
      }

      console.log("Email sent:", info.response);
      // Respond with the OTP session ID
      res.status(201).json({
        message: "Sign-Up successful. OTP sent to your email.",
        otpSessionId: otpEntry._id, // Send OTP session ID
      });
    });

    // Uncomment this block to enable sending OTP to phone via MSG91 (currently commented)
    // const msg91Response = await axios.post("https://api.msg91.com/api/v5/otp", {
    //   authkey: "your-msg91-authkey",
    //   template_id: "your-template-id",
    //   mobile: phone,
    //   otp: otp,
    // });

    // if (msg91Response.data.type === "success") {
    //   return res.status(201).json({ message: "Sign-Up successful. OTP sent to your email and mobile." });
    // } else {
    //   return res.status(500).json({ message: "Error sending OTP to mobile." });
    // }

  } catch (error) {
    res.status(500).json({ message: "Error signing up user.", error: error.message });
  }
});

// OTP Verification Route
app.post("/api/verify-otp", async (req, res) => {
  const { otpEmail, otpMobile, otpSessionId } = req.body;

  // Log to check if the request body is coming through correctly
  console.log("Received OTP details:", otpEmail, otpMobile, otpSessionId);

  if (!otpEmail || !otpMobile || !otpSessionId) {
    return res.status(400).json({ message: "OTP email, OTP session ID, and OTP values are required." });
  }

  try {
    // Retrieve OTP entry from database using the session ID
    const otpEntry = await OTP.findOne({ _id: otpSessionId });

    // Check if the OTP entry exists
    if (!otpEntry) {
      return res.status(404).json({ message: "OTP session not found or expired." });
    }

    // Verify the OTPs match
    const correctMobileOtp = "123456"; // Simulated OTP validation
    if (otpMobile === correctMobileOtp && otpEntry.otp === otpEmail) {
      // Successful verification
      console.log("OTP entry found and verified:", otpEntry);

      return res.status(200).json({
        message: "OTP verified successfully.",
        otpSessionId: otpEntry._id, // Send OTP session ID back for further processing
        email: otpEntry.email,      // Send the email used to generate the OTP
      });
    } else {
      // Invalid OTP or mismatch
      return res.status(400).json({ message: "Invalid OTP. Please try again." });
    }

  } catch (error) {
    // Catching any errors
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ message: "Error verifying OTP.", error: error.message });
  }
});


// Resend OTP Route
app.post("/api/resend-otp", async (req, res) => {
  const { otpSessionId, email } = req.body;

  if (!otpSessionId || !email) {
    return res.status(400).json({ message: "OTP session ID and email are required." });
  }

  try {
    const otpEntry = await OTP.findOne({ email, _id: otpSessionId });

    if (!otpEntry) {
      return res.status(404).json({ message: "OTP session not found." });
    }

    const newOtp = Math.floor(1000 + Math.random() * 9000);
    otpEntry.otp = newOtp;
    otpEntry.createdAt = Date.now(); // Reset the time of OTP

    await otpEntry.save();

    // Send the new OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your New OTP Code",
      text: `Your new OTP code is ${newOtp}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending OTP." });
      }

      console.log("Email sent:", info.response);
      res.status(200).json({ message: "New OTP has been sent." });
    });

  } catch (error) {
    res.status(500).json({ message: "Error resending OTP.", error: error.message });
  }
});
// Verify Document and Save Route
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Define the upload directory

// Modify the route to handle file uploads
app.post("/api/verify-document", upload.fields([
  { name: "govtIdFile", maxCount: 1 },
  { name: "regFile", maxCount: 1 },
  { name: "workFile", maxCount: 1 },
  { name: "aboutYourself", maxCount: 1 } // Added aboutYourself as a text field
]), async (req, res) => {
  const { otpSessionId, email, aboutYourself } = req.body;  // Include text field about yourself
  const files = req.files;  // Uploaded files

  console.log(`otpSessionId: ${otpSessionId}, email: ${email}, aboutYourself: ${aboutYourself}, files:`, files);

  // Ensure that all required fields and files are present
  if (!otpSessionId || !email || !aboutYourself || !files || !files.govtIdFile || !files.regFile || !files.workFile) {
    return res.status(400).json({ message: "All fields and files are required." });
  }

  try {
    // 1. Find the OTP entry using the otpSessionId
    const otpEntry = await OTP.findOne({ _id: otpSessionId });

    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP session." });
    }

    // 2. Find the user using the email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // 3. Now, save the document details and text input to the user schema
    user.documents = {
      govtId: {
        type: "govtId",
        filePath: files.govtIdFile[0].path,  // Save file path to the database
      },
      reg: {
        type: "reg",
        filePath: files.regFile[0].path,
      },
      work: {
        type: "work",
        filePath: files.workFile[0].path,
      },
    };

    // Save the text input (about yourself)
    user.aboutYourself = aboutYourself;

    // 4. Save the updated user object with the new document and text data
    await user.save();

    res.status(200).json({ message: "Documents and details successfully uploaded and saved." });
  } catch (error) {
    console.error("Error uploading documents:", error);
    res.status(500).json({ message: "Error uploading documents.", error: error.message });
  }
});

  

  
// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
