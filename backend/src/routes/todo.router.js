const { Router } = require("express");
const todoController = require("../controllers/todo.controller");

const router = Router();

router.post("/todo/create", todoController.create);
router.get("/todo/getAll", todoController.getAll);
router.get("/todo/getOne/:id", todoController.getOne);
router.put("/todo/update/:id", todoController.update);
router.delete("/todo/delete/:id", todoController.delete);

module.exports = router;