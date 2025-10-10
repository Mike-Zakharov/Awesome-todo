import express from "express";
import { todoModel } from "../models/todo-model.js";

const todosRouter = express.Router();

// Все таски
todosRouter.get("/", async (req, res) => {
  const todos = await todoModel.find();
  res.status(200).json(todos);
});

// Одна таска
todosRouter.get("/:id", async (req, res) => {
  const todo = await todoModel.findById(req.params.id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Не удалось найти задачу" });
  }
});

// Добавить таску
todosRouter.post("/", async (req, res) => {
  const title = req.body.title;
  const newTodo = new todoModel({ title });
  await newTodo.save();
  res.json(newTodo);
});

// Обновить таску
todosRouter.put("/:id", async (req, res) => {
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
todosRouter.delete("/:id", async (req, res) => {
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

export default todosRouter;
