const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.get("/auth", userController.checkRegistration);
router.get("/", userController.getUserData);
router.post("/reg", userController.registration);

module.exports = router;
