const router = require("express").Router();

router.get("/all-posts", (req, res) => {
  res.render("post/all-posts");
});

module.exports = router;
