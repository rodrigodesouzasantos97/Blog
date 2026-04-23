import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    const post = {
      title,
      description,
      author,
      image,
    };

    await blogFetch.post("/", post);

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="author">Autor:</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Digite o autor"
            onChange={(e) => setAuthor(e.target.value)}
            value={author || ""}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>

        <div className="form-control">
          <label htmlFor="description">Conteúdo:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Digite o conteúdo"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
          ></textarea>
        </div>

        <div className="form-control">
          <label htmlFor="image">Imagem:</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Digite o link da imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image || ""}
          />
        </div>

        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
