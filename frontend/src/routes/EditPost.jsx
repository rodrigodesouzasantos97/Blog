import blogFetch from "../axios/config";

import { useState, useEffect, useId } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import PostForm from "../components/PostForm";

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

    try {
      const post = {
        title,
        description,
        author,
        image,
      };

      const response = await blogFetch.patch(`/${id}`, post);

      toast.success(response.data.msg);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.msg);
    }
  };

  return (
    <div className="edit-post">
      <h2>Editando: {title}</h2>
      <PostForm
        onSubmit={edit}
        author={author}
        setAuthor={setAuthor}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        submitBtnValue={"Editar"}
      />
    </div>
  );
};

export default EditPost;
