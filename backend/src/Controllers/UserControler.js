import User from "../Models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Token Generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "15d" });
};

// Register Controller
export const RegisterUser = async (req, res) => {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    return res.status(400).json({ message: "Please fill all the fields!" });
  }

  const existingName = await User.findOne({ name });
  if (existingName) {
    return res.status(400).json({ message: "Username already exists!" });
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ message: "Email already exists!" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarUrl = gender === "male"
    ? `https://avatar.iran.liara.run/public/boy?username=${name}`
    : `https://avatar.iran.liara.run/public/girl?username=${name}`;

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    avatar: avatarUrl,
    gender
  });

  res.status(200).json({
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    avatar: newUser.avatar,
    gender: newUser.gender,
    token: generateToken(newUser._id)
  });
};

// Login Controller
export const LoginUser = async (req, res) => {
  const { identifier, password } = req.body; // 'identifier' can be either name or email

  if (!identifier || !password) {
    return res.status(400).json({ message: "Please fill both fields!" });
  }

  // Check if identifier is an email
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

  // Find user by email or name
  const foundUser = await User.findOne(
    isEmail ? { email: identifier } : { name: identifier }
  );

  if (!foundUser) {
    return res.status(401).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, foundUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Password is invalid" });
  }

  res.status(200).json({
    id: foundUser._id,
    name: foundUser.name,
    email: foundUser.email,
    avatar: foundUser.avatar,
    gender: foundUser.gender,
    token: generateToken(foundUser._id)
  });
};
 



export const getProfile = async(req,res)=>{

    if (!req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  res.status(200).json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
    gender: req.user.gender
  });
}