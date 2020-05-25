const express = require("express");
const tagsRouter = express.Router();

const { getAllTags, getPostByTagName } = require("../db/index");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

const { getAllPosts } = require("../db");

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  const { tagName } = req.params;
  try {
    // use our method to get posts by tag name from the db
    const post = await getPostByTagName;
    // send out an object to the client { posts: // the posts }
    res.send({ posts: post });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

module.exports = tagsRouter;
