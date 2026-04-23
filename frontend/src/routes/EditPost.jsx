import blogFetch from "../axios/config";

import { useState, useEffect, useId } from "react";

import { useNavigate, useParams } from "react-router-dom";

import "./EditPost.css";

const EditPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/${id}`);

      const data = response.data;

      setTitle(data.title);
      setDescription(data.description);
      setAuthor(data.author);
      setImage(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const edit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      description,
      author,
      image,
    };

    await blogFetch.patch(`/${id}`, post);

    navigate("/admin");
  };

  return (
    <div className="edit-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={edit}>
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
        <input type="submit" value="Editar" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
