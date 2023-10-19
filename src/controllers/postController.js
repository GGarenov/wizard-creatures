const router = require("express").Router();
const creatureService = require("../services/creatureService");

router.get("/all", async (req, res) => {
  const creatures = await creatureService.getAll().lean();
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
  res.render("post/profile");
});

router.get("/:creatureId/details", async (req, res) => {
  const { creatureId } = req.params;
  console.log({ creatureId });

  const creature = await creatureService.singleCreature(creatureId).lean();
  const { user } = req;
  const { owner } = creature;
  const isOwner = user?._id === owner.toString();

  res.render("post/details", { creature, isOwner });
  console.log({ user });
});

module.exports = router;
