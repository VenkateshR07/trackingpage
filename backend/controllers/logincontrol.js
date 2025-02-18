const adminschema = require("../schemas/loginschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const postloginfun = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  try {
    const user = await adminschema.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id }, process.env.Token, {
      expiresIn: "1h",
    });

    res.json({ message: "Login Successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const forgetpasswordfun = async (req, res) => {
  const { email } = req.body;
  const user = await adminschema.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.resetToken = resetToken;
  user.tokenExpiry = Date.now() + 3600000;
  await user.save();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.Mainmail,
      pass: process.env.MainPassword,
    },
  });
  const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

  await transporter.sendMail({
    from: process.env.Mainmail,
    to: user.email,
    subject: "Password Reset Request",
    text: `Click the link to reset your password: ${resetLink}`,
  });
  console.log(`Reset link sent to: ${user.email}`);
  res.json({ message: "Reset link sent to your email" });
};

module.exports = { postloginfun, forgetpasswordfun };
