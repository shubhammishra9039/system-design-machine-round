import { json } from "express";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  const { userName, email, phone, password } = req.body;
  if (!userName || !email || !phone || !password) {
    return res.status(500).json("All field are required");
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.status(200).json({ message: "user all ready register", user });
  }

  const newUser = await User.create({ userName, email, phone, password });

  return res
    .status(201)
    .json({ message: "user register Successfully", newUser });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(500).json({ message: "all Field are required" });
  }

  const user = await User.findOne({ email });

  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });

  if (!user) {
    return res.status(500).json({ message: "Invalid User" });
  }
  const {_id}= user
  console.log(user,"user")
  await User.findByIdAndUpdate({ _id}, { token });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 1000,
  });

  return res.status(200).json({ message: "user login Successfully", user });
};

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json({ allUsers });
};
