import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = await User.create({ ...req.body, password: hash });
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { username, password: userPassword } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "User not found!"));

    const correctPassword = await bcrypt.compare(userPassword, user.password);
    if (!correctPassword)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );
    const { password, isAdmin, ...other } = user._doc;
    res.cookie("access_token", token, { httpOnly: true });
    res.status(200).json({ ...other });
  } catch (error) {
    next(error);
  }
};
