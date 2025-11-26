import express from "express";
import mongoose from "mongoose";
import todosRouter from "./routes/todos.js";
import authRouter from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/Awesome-todo";
export const SECRET_KEY = "HJKLabcd1234GHJKLabcd1234GHJKLabcd";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/todos", todosRouter);
app.use("/auth", authRouter);

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
