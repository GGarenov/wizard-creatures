const router = require("express").Router();
const postService = require("../services/postService");

router.get("/all-posts", (req, res) => {
  res.render("post/all-posts");
});

router.get("/create", (req, res) => {
  console.log(postService.getAll());
  res.render("post/create");
});

router.post("/create", (req, res) => {
  //
  console.log(req.body);
  const { name, specie, skin, eye, image, description } = req.body;
  postService.create({
    name,
    specie,
    skin,
    eye,
    image,
    description,
  });
  res.redirect("/");
});

module.exports = router;
