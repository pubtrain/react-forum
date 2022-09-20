import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const [comments, setComments] = useState(null);
  const [article, setArticle] = useState(null);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  };

  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
  };

  const getArticle = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setArticle(json);
      });
  };
  useEffect(() => {
    if (comments === null) {
      getComments();
    }
  });

  useEffect(() => {
    if (post === null) {
      getPost();
    }
  });

  useEffect(() => {
    if (article === null) {
      getArticle();
    }
  });
  return (
    <>
      <h3>Titel: {article?.title}</h3>
      <p>Text: {article?.body}</p>
      {comments &&
        comments.map((user) => {
          if (user.postId == id) {
            return (
              <div className="comment-card">
                <h4>Namn: {user.name}</h4>
                <h4>Email: {user.email}</h4>
                <p>Kommentar: {user.body}</p>
              </div>
            );
          }
        })}
    </>
  );
}

export default Post;
