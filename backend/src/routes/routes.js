const express = require("express");
const todoRouter = require("./todo.router");
const userRouter = require("./user.router");

const router = express.Router();

router.use(todoRouter);
router.use(userRouter);

module.exports = router;