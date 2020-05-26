import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../lib/apiUrl';

function Posts() {
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    axios
      .get(apiUrl('/api/v1/posts'), { withCredentials: true })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }, []);

  return (
    <div className="Posts">
      You have this many posts: {posts.length.toString()}
    </div>
  );
}

export default Posts;
