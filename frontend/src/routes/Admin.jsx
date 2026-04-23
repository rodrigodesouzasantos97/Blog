import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import PostContent from "../components/PostContent";

import "./Admin.css";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await blogFetch.delete(`/${id}`);

      const filteredPosts = posts.filter((post) => post._id !== id);

      setPosts(filteredPosts);
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.toReversed().map((post) => (
          <div className="post" key={post._id}>
            <PostContent post={post} />
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post._id}`}>
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post._id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
