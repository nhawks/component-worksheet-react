import React from 'react';
import axios from 'axios';

const baseURL = 'https://v2.jokeapi.dev/joke/Programming?amount=5'

export default function DisplayJoke() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

    