import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./Post.css";

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/${id}`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <p>{post.author}</p>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <img src={post.image} alt={post.title} />
        </div>
      )}
    </div>
  );
};

export default Post;
