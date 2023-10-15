const router = require("express").Router();
// const postService = require("../services/postService");

router.get("/", (req, res) => {
  // res.send("Hello home page");
  res.render("home");
});

router.get("/404", (req, res) => {
  res.render("404");
});

router.get("post/all-posts", (req, res) => {
  const posts = postService.getAll();
  console.log({ posts });
  res.render("all-posts", { posts });
});

module.exports = router;
