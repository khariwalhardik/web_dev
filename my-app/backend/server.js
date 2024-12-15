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
// Login Route
app.post("/api/login", async (req, res) => {
  const { email, phone } = req.body;

  if (!email || !phone) {
    return res.status(400).json({ message: "Both email and phone are required." });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email, phone });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up." });
    }

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Save OTP to MongoDB
    const otpEntry = new OTP({ email, otp });
    await otpEntry.save();

    // Send OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Login OTP Code",
      text: `Your OTP code is ${otp}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending OTP." });
      }

      console.log("Email sent:", info.response);
      // Respond with OTP session ID
      res.status(200).json({
        message: "OTP sent to your email.",
        otpSessionId: otpEntry._id, // Send OTP session ID to the frontend
      });
    });

    // Uncomment this block to enable OTP via SMS (currently commented)
    // const msg91Response = await axios.post("https://api.msg91.com/api/v5/otp", {
    //   authkey: "your-msg91-authkey",
    //   template_id: "your-template-id",
    //   mobile: phone,
    //   otp: otp,
    // });

    // if (msg91Response.data.type === "success") {
    //   return res.status(200).json({ message: "OTP sent to your email and mobile." });
    // } else {
    //   return res.status(500).json({ message: "Error sending OTP to mobile." });
    // }

  } catch (error) {
    res.status(500).json({ message: "Error during login.", error: error.message });
  }
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
        otpSessionId: otpEntry._id, // Send OTP session ID to the frontend
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
  console.log(`Received data:
    otpEmail: ${otpEmail},
    otpMobile: ${otpMobile},
    otpSessionId: ${otpSessionId}`);

  // if (!otpEmail || !otpMobile || !otpSessionId) {
  //   return res.status(400).json({ message: "OTP email, OTP session ID, and OTP values are required." });
  // }
  if(!otpEmail){return res.status(400).json({ message: "OTP email is required." });}
  if(!otpMobile){return res.status(400).json({ message: "OTP mobile is required." });}
  if(!otpSessionId){return res.status(400).json({ message: "OTP session ID is required." });}


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

// Modify the route to handle file uploads
app.post("/api/verify-document", async (req, res) => {
  const { otpSessionId, govtIdOption, govtIdNumber, regOption, regNumber, workOption, workNumber, aboutYourself } = req.body;

  console.log(`Received data:`, { otpSessionId, govtIdOption, govtIdNumber, regOption, regNumber, workOption, workNumber, aboutYourself });

  // Ensure all required fields are present
  if (!otpSessionId || !govtIdOption || !govtIdNumber || !regOption || !regNumber || !workOption || !workNumber) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // 1. Find the OTP entry using the otpSessionId
    const otpEntry = await OTP.findOne({ _id: otpSessionId });

    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP session." });
    }

    // 2. Find the user associated with the OTP
    const user = await User.findOne({ email: otpEntry.email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // 3. Save the document details and text input to the user's profile
    user.documents = {
      govtId: {
        type: govtIdOption,
        IdNumber: govtIdNumber, // Save the ID number instead of a file
      },
      reg: {
        type: regOption,
        IdNumber: regNumber,
      },
      work: {
        type: workOption,
        IdNumber: workNumber,
      },
    };

    // Save the "about yourself" field
    user.aboutYourself = aboutYourself;

    // 4. Save the updated user object with new data
    await user.save();

    res.status(200).json({ message: "Details successfully uploaded and saved." });
  } catch (error) {
    console.error("Error processing document details:", error);
    res.status(500).json({ message: "Error processing document details.", error: error.message });
  }
});

// Additional Info Route
// Multer storage configuration
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Store file with unique name
  },
});

const upload = multer({ storage: storage });

// Handle the API request to save additional info
app.post("/api/additional-info", upload.single("profilePic"), async (req, res) => {
  const { otpSessionId, workplace, address, dob,profilePic } = req.body;

  // Log the received data and file for debugging purposes
  console.log("Received additional info data:", req.body);
  console.log("Received file:", req.file);

  // Validate required fields and check if the file is available
  // if (!otpSessionId || !workplace || !address || !dob || !req.file) {
  //   return res.status(400).json({ message: "All fields are required, including the profile picture." });
  // }
  if(!otpSessionId){return res.status(400).json({ message: "OTP session ID is required." });}
  if(!workplace){return res.status(400).json({ message: "Workplace is required." });}
  if(!address){return res.status(400).json({ message: "Address is required." });}
  if(!dob){return res.status(400).json({ message: "Date of Birth is required." });}
  if(!req.file){return res.status(400).json({ message: "Profile picture is required." });}
  
  try {
    // Find the OTP entry to retrieve the user's email
    const otpEntry = await OTP.findOne({ _id: otpSessionId });
    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP session." });
    }

    // Find the user associated with the email
    const user = await User.findOne({ email: otpEntry.email });
    if (!user) {
      return res.status(404).json({ message: "User not found! Try the SignUp process again." });
    }

    // Update the user with additional information
    user.workplace = workplace;
    user.address = address;
    user.dob = new Date(dob); // Ensure the date format is consistent
    user.profilePic = req.file.path; // Save the path of the uploaded profile picture in the database

    // Save the updated user information
    await user.save();

    res.status(200).json({ message: "Additional information saved successfully." });
  } catch (error) {
    console.error("Error saving additional information:", error);
    res.status(500).json({ message: "Error saving additional information.", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
