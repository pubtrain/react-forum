import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [post, setPost] = useState(null);

  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPost(json);
      });
  };

  useEffect(() => {
    if (post === null) {
      getPost();
    }
  });

  return (
    <>
      <h2>Forum titles</h2>
      <div>
        <ul>
          {post?.map((post) => (
            <Link to={`/post/${post.id}`} state={post}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
