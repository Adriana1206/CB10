import React, { useState, useEffect } from 'react';



function SinglePost({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return null; 
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

export default SinglePost;