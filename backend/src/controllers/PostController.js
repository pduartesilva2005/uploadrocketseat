const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  },

  async create(req, res) {
    const { originalname: name, size, key, location: url = "" } = req.file;

    const post = await Post.create({
      name,
      size,
      key,
      url,
    });

    return res.json(post);
  },

  async delete(req, res) {
    const { id } = req.params;

    const post = await Post.findById(id);

    await post.remove();

    return res.json({ message: "Post deleted successfully" });
  },
};
