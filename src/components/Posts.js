import React, { useLayoutEffect, useState } from 'react';
import { apiIndex, apiShow } from '../lib/requests';

function Posts() {
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    apiIndex('posts', (data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section className="Posts section">
      You have this many posts: {posts.length.toString()}
    </section>
  );
}

export default Posts;
