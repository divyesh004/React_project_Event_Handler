import React, { useState, useEffect } from 'react';
import Post from './post';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPosts = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleGetPosts}>GET POSTS</button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;