import express from "express";
import { tasks } from "./tasks/data.js";
import { authMiddleware } from "./auth-middleware.js";
import { users } from "./users.js";
import bodyParser from "body-parser"; // удалить из проекта
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import { userModel } from "./models/user-model.js";
import { todoModel } from "./models/todo-model.js";

const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/Awesome-todo";
export const SECRET_KEY = "Th3-m0st-SECURe-p@ssw0rd-1S-A-Pa$$WoRD";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Все таски
app.get("/todos", async (req, res) => {
  const todos = await todoModel.find();
  res.status(200).json(todos);
});

// Одна таска
app.get("/todos/:id", async (req, res) => {
  const todo = await todoModel.findById(req.params.id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Не удалось найти задачу" });
  }
});

// Добавить таску
app.post("/todos", async (req, res) => {
  const title = req.body.title;
  const newTodo = new todoModel({ title });
  await newTodo.save();
  res.json(newTodo);
});

// Обновить таску
app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await todoModel.findOneAndUpdate(
      { _id: req.params.id }, // поиск по уникальному полю
      { $set: req.body }, // поля для обновления
      { new: true } // вернуть обновлённый документ
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Элемент не найден" });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// удалить таску
app.delete("/todos/:id", async (req, res) => {
  console.log("id:", req.params.id, typeof req.params.id);

  try {
    const deletedTodo = await todoModel.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Элемент не найден" });
    }
    res.json({ message: "Элемент удалён", todo: deletedTodo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users", async (rea, res) => {
  const users = await userModel.find();
  res.json(users);
});

// Регистрация
app.post("/register", async (req, res) => {
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

  res.json({
    message: "Пользователь зарегистрирован!",
    user: { email: newUser.email, id: newUser._id },
  });
});

// Вход
app.post("/login", async (req, res) => {
  try {
    const { email, password, username } = req.body;
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

// Middleware для проверки JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Токен отсутствует" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Неверный токен" });

    req.user = user;
    next();
  });
}

app.get("/me", authenticateToken, async (req, res) => {
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

app.use((req, res) => {
  res.status(404).send("Совсем ничего не нашли");
});

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MangoDB: mango delivered to base");
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log("server is running! not walking :)");
  });
};

start();
