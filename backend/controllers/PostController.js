const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Post.findById(id);

    if(!post) {
      res.status(404).json({ msg: "Post não encontrado." });
      return;
    }

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

const createPost = async (req, res) => {
  try {
    const { title, description, author, image } = req.body;

    if (!title || !description || !author || !image) {
      res.status(400).json({ msg: "Por favor, preencha todos os campos." });
      return;
    }

    const newPost = {
      title,
      description,
      author,
      image,
    };

    const response = await Post.create(newPost);

    res.status(201).json({ response, msg: "Post criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
};
