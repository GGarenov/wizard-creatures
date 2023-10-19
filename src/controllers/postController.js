const router = require("express").Router();
const creatureService = require("../services/creatureService");

router.get("/all", async (req, res) => {
  const creatures = await creatureService.getAll().lean();
  console.log({ creatures });
  res.render("post/all-posts", { creatures });
});

router.get("/create", (req, res) => {
  res.render("post/create");
});

router.post("/create", async (req, res) => {
  const { name, specie, skinColor, eyeColor, imageUrl, description } = req.body;
  const payload = {
    name,
    specie,
    skinColor,
    eyeColor,
    imageUrl,
    description,
    owner: req.user,
  };
  await creatureService.create(payload);
  res.redirect("/posts/all");
});

router.get("/profile", (req, res) => {
  const { creatureId } = req.params;
  console.log({ creatureId });
  res.render("post/profile");
});

router.get("/:creatureId/details", (req, res) => {
  res.render("post/details");
});

module.exports = router;
