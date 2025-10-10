import express from "express";
import mongoose from "mongoose";
import todosRouter from "./routes/todos.js";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/Awesome-todo";
export const SECRET_KEY = "Th3-m0st-SECURe-p@ssw0rd-1S-A-Pa$$WoRD";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todosRouter);
app.use("/", usersRouter);

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
