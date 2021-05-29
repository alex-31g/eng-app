const Router = require("express");
const router = new Router();
const userRouter = require("./user.router");
const followerRouter = require("./follower.router");

router.use("/user", userRouter);
router.use("/follower", followerRouter);

module.exports = router;
