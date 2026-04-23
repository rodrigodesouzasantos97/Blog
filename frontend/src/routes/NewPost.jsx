import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import PostForm from "../components/PostForm";

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
      <PostForm
        onSubmit={createPost}
        author={author}
        setAuthor={setAuthor}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        submitBtnValue={"Criar"}
      />
    </div>
  );
};

export default NewPost;
