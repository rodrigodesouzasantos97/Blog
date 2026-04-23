import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import PostContent from "../components/PostContent";

import "./Home.css";

const Home = () => {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date
      .toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", " -");
  };

  return (
    <div id="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.toReversed().map((post) => (
          <div className="post" key={post._id}>
            <PostContent post={post} />
            <Link to={`/posts/${post._id}`} className="btn">
              Ler Mais
            </Link>
            <div className="dates">
              <p>{formatDate(post.createdAt)}</p>
              <p>
                {post.createdAt !== post.updatedAt
                  ? `Editado em: ${formatDate(post.updatedAt)}`
                  : ""}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
