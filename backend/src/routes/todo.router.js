const express = require("express");
const todoController = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.post("/todo/create", todoController.create);
todoRouter.get("/todo/getAll", todoController.getAll);
todoRouter.get("/todo/getOne/:id", todoController.getOne);
todoRouter.put("/todo/update/:id", todoController.update);
todoRouter.delete("/todo/delete/:id", todoController.delete);

module.exports = todoRouter;