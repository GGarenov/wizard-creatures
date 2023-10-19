// const uniqid = require("uniqid");
// const posts = [];

// exports.create = (postData) => {
//   const newPost = {
//     id: uniqid(),
//     ...postData,
//   };
//   posts.push(newPost);

//   return newPost;
// };

// exports.getAll = () => {
//   return posts; // Return the reference to the same array
// };

// // Export the posts array so it can be shared with other parts of your application
// exports.posts = posts;

const Creature = require("../models/Creature");

exports.create = (creatureData) => Creature.create(creatureData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId);

exports.update = (creatureId, creatureData) => Creature.findByIdAndUpdate(creatureId, creatureData);
