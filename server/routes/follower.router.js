const Router = require("express");
const router = new Router();
const followerController = require("../controllers/follower.controller");

router.get("/following", followerController.getFollowing);
router.get("/followers", followerController.getFollowers);
router.post("/follow", followerController.follow);
router.delete("/unfollow", followerController.unfollow);

module.exports = router;
