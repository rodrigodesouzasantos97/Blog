import blogFetch from "../axios/config";

import { useState } from "react";

import { toast } from "react-toastify";

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

    try {
      const post = {
        title,
        description,
        author,
        image,
      };

      const response = await blogFetch.post("/", post);

      toast.success(response.data.msg);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
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
