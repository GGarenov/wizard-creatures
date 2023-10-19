const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  name: String,
  specie: String,
  skinColor: String,
  eyeColor: String,
  imageUrl: String,
  description: String,
  votes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Creature = mongoose.model("Creature", creatureSchema);
module.exports = Creature;
