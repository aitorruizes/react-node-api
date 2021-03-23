const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/user/create", userController.create);
userRouter.get("/user/getAll", userController.getAll);
userRouter.get("/user/getOne/:id", userController.getOne);
userRouter.put("/user/update/:id", userController.update);
userRouter.delete("/user/delete/:id", userController.delete);
userRouter.post("/user/auth", userController.auth);
userRouter.post("/user/me", userController.me);

module.exports = userRouter;