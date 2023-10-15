const router = require("express").Router();

router.get("/all-posts", (req, res) => {
  res.render("post/all-posts");
});

router.get("/create", (req, res) => {
  res.render("post/create");
});

module.exports = router;
