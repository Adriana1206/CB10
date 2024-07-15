import SinglePost from "./components/SinglePost";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [postId, setPostId] = useState(1); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Post</h1>
      <SinglePost postId={postId} />
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded block mx-auto" onClick={() => setPostId(postId + 1)}>Next</button>
    </div>
  );
}

export default App;