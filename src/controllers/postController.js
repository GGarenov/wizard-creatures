// const router = require("express").Router();
// const postService = require("../services/postService");

// router.get("/all-posts", (req, res) => {
//   const allPosts = postService.getAll();
//   res.render("post/all-posts", { posts: allPosts }); // Pass the posts to the template
// });

// router.get("/create", (req, res) => {
//   res.render("post/create");
// });

// router.post("/create", (req, res) => {
//   const { name, specie, skin, eye, imageUrl, description } = req.body;
//   postService.create({
//     name,
//     specie,
//     skin,
//     eye,
//     imageUrl,
//     description,
//   });
//   res.redirect("/posts/all-posts"); // Redirect to the all-posts page
// });

// module.exports = router;

const router = require("express").Router();
const creatureService = require("../services/creatureService");

router.get("/all", (req, res) => {
  res.render("post/all-posts");
});

router.get("/create", (req, res) => {
  res.render("post/create");
});

router.post("/create", async (req, res) => {
  const { name, specie, skinColor, eyeColor, imageUrl, description } = req.body;
  const payload = { name, specie, skinColor, eyeColor, imageUrl, description };
  await creatureService.create(payload);
  res.redirect("/posts/all");
});

router.get("/profile", (req, res) => {
  res.render("post/profile");
});

module.exports = router;
