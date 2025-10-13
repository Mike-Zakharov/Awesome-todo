import express from "express";
import { userModel } from "../models/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../auth-middleware.js";

const authRouter = express.Router();

usersRouter.get("/users", async (rea, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
});

// Регистрация
usersRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const candidat = await userModel.findOne({ email });

  if (candidat) {
    res
      .status(401)
      .json({ error: `Пользователь с таким ${email} уже существует` });
  }

  const newUser = new userModel({
    username,
    email,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await newUser.save();

  res.status(200).json({
    message: "Пользователь зарегистрирован!",
    user: { email: newUser.email, id: newUser._id },
  });
});

// Вход
usersRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(401).json({ error: "Пользователь не найден" });

    const validPass = bcrypt.compare(password, user.password);

    if (!validPass) return res.status(401).json({ error: "Неверный пароль" });

    const token = jwt.sign(
      { _id: user._id.toString(), username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true, // Недоступен для JavaScript
      secure: true, // Только по HTTPS
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 1000, // 24 час в миллисекундах
    });
    res.json({ message: "Вход успешен", user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouter.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default authRouter;
