const uniqid = require("uniqid");
const posts = [
  //   {
  //     name: "Dark Magician",
  //     specie: "druid",
  //     skin: "white",
  //     eye: "blue",
  //     image: "https://static.wikia.nocookie.net/myyugiohdeck/images/d/da/Dark_Magician.jpg",
  //     description: "The dark magician from Yu-Gi-Oh",
  //   },
];

exports.create = (postData) => {
  const newPost = {
    id: uniqid(),
    ...postData,
  };
  posts.push(newPost);

  return newPost;
};

exports.getAll = () => {
  return [...posts];
};
