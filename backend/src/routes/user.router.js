const {Router} = require("express");
const userController = require("../controllers/user.controller");

const router = Router();

router.post("/user/create", userController.create);
router.get("/user/getAll", userController.getAll);
router.get("/user/get/:id", userController.getOne);
router.get("/user/update/:id", userController.update);
router.delete("/user/delete/:id", userController.delete);

module.exports = router;