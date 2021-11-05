const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("Home");
});

router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
    age: req.body.age,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
